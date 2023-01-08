### ToDO Application
#### Tech stack : React, TypeScript and Parcel(Bundler)

To run this application, follow the below steps

1. clone the frontend git repository from https://github.com/saikumarpb/todo-react

2.  clone the backend git repository from https://github.com/saikumarpb/spring-boot-todo-backend

3. Instructions to setup backend repository are mentioned in the [Readme.md](https://github.com/saikumarpb/spring-boot-todo-backend#readme) file in the backend repo itself. Follow the instructions and complete the backend setup successfully.

4. After completing backend setup, add the backend url in `.env` file of this repository.

5. open terminal and execute the below commands
   
   1. `npm install` this installs all the packages required to run the application.
   2. `npm start` this will build and deploy application on a live server in your local machine. server url would be http://localhost:1234 if port 1234 not occupied on your machine.

6. Now the todo application is live and can be tested.

##### Packages used
1. ***react*** and ***react-dom***
2. ***typescript*** the language itself
3. ***parcel*** for bundling,development server, traspiling (uses `babel` as transitive dependency), crating builds for production.
4. ***axios*** for interacting with [backend](https://github.com/saikumarpb/spring-boot-todo-backend) using API's.

```
Note: project is built from scratch using npm,parcel unlike conventional way of initializing a react application using create-react-app which would come with plenty of functionality out of the box. this project uses required packages only. resembles lightweight customized version of create-react-app
```

#### Features
- Create a todo/task with description.
- Edit/Update a pending todo/task.
- Mark a todo for completion.
- Delete a completed task.
- UI contains 3 sections Add/Edit Todo, Todo list, Completed Task list.
