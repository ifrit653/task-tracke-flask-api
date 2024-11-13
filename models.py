from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), unique=True, nullable = False)

    def to_dict(self):
        return {'id': self.id, 'name': self.name}

class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(120), nullable = False)
    description = db.Column(db.String(255), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable= False)
    category = db.relationship('Category', backref=db.backref('tasks', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'category': self.category.to_dict()
        }