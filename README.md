# Todo App
- ToDo. This application allows users to keep track of tasks. These tasks include a description.

> This app build by using two separated Projects and Connect to each others using Rest-API's
-------------------------------------------------------
## Backend : 
- This app build using NodeJS, Express and PostgressDB

### Installation

```bash
$ npm install 
```

### Routes
- 'hostname' + /api/todos

> Get : Get All The Todos In The Database .

> Post : Add New Todo Item Into The DataBase,  
>JSON Keys('text','checked),  
> BODY( ' desription of the task ' , ' check if the item is completed or not ' ) ('STRING','BOOLEAN') .

> Put : Update The Values Inside An Item of The Todo List, 
>JSON Keys('id') required ('STRING'), ('text','checked) optional .

>Delete : Delete An Item, >JSON Keys('id') required ('STRING')



---------------------------------------

## FrontEnd : 
....
