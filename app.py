from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/get-tasks", methods=['GET'])
def getTasks():
# TODO implement endpoint that send all tasks
    return

@app.route("/set-task", methods=['POST'])
# TODO implement endpoint that add new task
def setTask():
    return
    
@app.route("/edit-taks/{task_id}", methods=['PUT'])
def editTask():
    return

@app.route("/edit-task/{task_id}", methods=['DELETE'])
def DelTask():
    return