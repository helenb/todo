# Todo app for learning django rest framework and practising React

## To set up a local build

### Django

```bash
git clone git@github.com:helenb/todo.git
cd todo
python3 -m venv todoenv
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

The django app will be available at http://localhost:8000/admin - log in with the credentials you created when running createsuperuser. You'll be able to see the list of todos and categories in the django admin

You can also view the api from django reset framework at 

http://localhost:8000/
http://localhost:8000/todos
http://localhost:8000/categories

### React
In a separate terminal tab
```bash
cd todo/todoreact
npm install
npm run start
```

The react app will be available at http://localhost:3000/todos/

Any todos and categories you add or tick off in the React app will also be updated in the django admin.

## Future plans for the app

- Add authentication so this could work in a production environment, where different users can save their own to do list
- Allow a user to delete a to do item or a category
- Allow a user to edit a to do item (includling the name, category and due date) or a category
- Allow multiple categories per to do item
- Add redux. While this is probably overkill for this app, it would be good to practice.
- Write tests
- Allow different ways to list to do items:
 - by date
 - by category
 - by overdue
 - not done only
 - done only
