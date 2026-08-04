from pathlib import Path
from flask import Flask, redirect, render_template, send_from_directory, url_for


app = Flask(
    __name__,
    static_folder="assets",
    static_url_path="/assets",
)

OLD_SITE_DIR = Path(__file__).resolve().parent / "old_version"


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/diensten")
def diensten():
    return render_template("diensten.html")


@app.get("/contact")
def contact():
    return render_template("contact.html")


# Oude .html-adressen en de verdwenen pagina's (over, nieuws) blijven werken.
LEGACY_ROUTES = {
    "/index.html": "index",
    "/diensten.html": "diensten",
    "/contact.html": "contact",
    "/over": "index",
    "/over.html": "index",
    "/nieuws": "index",
    "/nieuws.html": "index",
}


def legacy_redirect(target: str):
    return lambda: redirect(url_for(target), code=301)


for rule, endpoint in LEGACY_ROUTES.items():
    app.add_url_rule(
        rule,
        endpoint=f"legacy_{rule.strip('/').replace('.', '_')}",
        view_func=legacy_redirect(endpoint),
        methods=["GET"],
    )


@app.get("/old")
def old_site_root():
    return redirect(url_for("old_site_index"))


@app.get("/old/")
def old_site_index():
    return send_from_directory(OLD_SITE_DIR, "index.html")


@app.get("/old/<path:requested_path>")
def old_site(requested_path: str):
    if requested_path.endswith("/"):
        requested_path = f"{requested_path}index.html"
    return send_from_directory(OLD_SITE_DIR, requested_path)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)