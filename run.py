#!/usr/bin/env python3

from flask import Flask, render_template


app = Flask(__name__)


@app.route('/cube')
def Cube():
	return render_template('cube.html')


@app.route('/cube2')
def Cube2():
	return render_template('cube2.html');

@app.route('/test')
def test():
	return render_template('test.html')
	
@app.route('/text')
def text():
	return render_template('text.html')
	
@app.route('/webgl/<lesson>')
def buildingblocks(lesson):
	return render_template('webgl/lessons.html', lesson=lesson)


app.run(host='0.0.0.0', debug=True)
