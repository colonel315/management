__author__ = 'Trey'

from flask import Flask, render_template
from flask_frozen import Freezer
import sys

app = Flask(__name__)
app.config.from_object(__name__)
freezer = Freezer(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/day_numero_uno/what_to_expect')
def what_to_expect():
    return render_template('what_to_expect.html')


@app.route('/economics/jobs')
def jobs():
    return render_template('jobs.html')


@app.route('/economics/how_eco_works')
def how_eco_works():
    return render_template('how_eco_works.html')


@app.route('/general_day/the_normal_day')
def the_normal_day():
    return render_template('the_normal_day.html')


@app.route('/general_day/brain_sweat')
def brain_sweat():
    return render_template('brain_sweat.html')


@app.route('/expectations')
def expectations():
    return render_template('expectations.html')


@app.route('/classroom_management/class-yes')
def classity_yessity():
    return render_template('class-yes.html')


@app.route('/classroom_management/hey_everybody')
def hey_everybody():
    return render_template('hey_everybody.html')


@app.route('/classroom_management/ask_permssion')
def permission():
    return render_template('permission.html')


@app.route('/classroom_management/transition')
def transition():
    return render_template('transition.html')


@app.route('/classroom_management/ask_for_help')
def asking_for_help():
    return render_template('asking_for_help.html')


@app.route('/centers')
def centers():
    return render_template('centers.html')


@app.route('/student_teacher_relationship')
def positive_relationship():
    return render_template('student_teacher_relationship.html')


@app.route('/discipline_plan/rules')
def rules():
    return render_template('rules.html')


@app.route('/discipline_plan/consequences')
def consequences():
    return render_template('consequences.html')


@app.route('/discipline_plan/recorded_behavior')
def recorded_behavior():
    return render_template('recorded_behavior.html')


@app.route('/discipline_plan/behavior_contract')
def contract():
    return render_template('contract.html')


@app.route('/discipline_plan/parents')
def parents():
    return render_template('parents.html')


@app.route('/classroom/classroom_layout')
def classroom_layout():
    return render_template('classroom_layout.html')


@app.route('/classroom/classroom_door')
def classroom_door():
    return render_template('classroom_door.html')


@app.route('/classroom/display_work')
def display_work():
    return render_template('display_work.html')


@app.route('/classroom/teaching')
def teaching():
    return render_template('teaching.html')


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(debug=True)