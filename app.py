from flask import Flask, render_template


app = Flask(
    __name__,
    static_folder="assets",
    static_url_path="/assets",
)


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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)