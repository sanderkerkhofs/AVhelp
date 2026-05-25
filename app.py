from pathlib import Path
from flask import Flask, redirect, render_template, send_from_directory, url_for


app = Flask(
    __name__,
    static_folder="assets",
    static_url_path="/assets",
)

OLD_SITE_DIR = Path(__file__).resolve().parent / "old_version"


@app.get("/")
@app.get("/index.html")
def index():
    return render_template("index.html")


@app.get("/over")
@app.get("/over.html")
def over():
    return render_template("over.html")


@app.get("/nieuws")
@app.get("/nieuws.html")
def nieuws():
    return render_template("nieuws.html")


@app.get("/contact")
@app.get("/contact.html")
def contact():
    return render_template("contact.html")


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