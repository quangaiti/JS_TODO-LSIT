<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">

    <link rel="stylesheet" href="./style.css">
    
    <script src="main.js"></script>
</head>

<body>

    <div class="container-fluid mt-2">
        <div class="todo bg-info p-2">
            <div class="title-todo py-3">
                <h2 class="text-center text-white">TODO LIST <i class="bi bi-pin-angle-fill"></i></h2>
            </div>
            <!-- INPUT -->
            <div class="bg-warning py-3 text-white d-flex m-3 rounded">
                <div class="row px-2 text-center">
                    <div class="col-md-2">
                        <label for="title" class="col-form-label text-center"><h4>Title</h4></label>
                        <input type="text" class="form-control" id="title" placeholder="Nhập title">
                    </div>
                    <div class="col-md-2">
                        <label for="desc" class="col-form-label text-center"><h4>Descript</h4></label>
                        <input type="text" class="form-control"  id="desc" placeholder="Nhập Descript">
                    </div>
                    <div class="col-md-2">
                        <label for="timebegin" class="col-form-label text-center"><h4>Time Begin</h4></label>
                        <input type="datetime-local" class="form-control" id="timebegin" placeholder="Nhập Time Begin">
                    </div>
                    <div class="col-md-2">
                        <label for="timeend" class="col-form-label text-center"><h4>Time End</h4></label>
                        <input type="datetime-local" class="form-control" id="timeend" placeholder="Nhập Time End">
                    </div>
                    <div class="col-md-2">
                        <label for="status" class="col-form-label text-center"><h4>Status</h4></label>
                        <!-- <input type="text" class="form-control" id="status" placeholder="Nhập Status"> -->
                        <select name="" id="status" class="form-select">
                            <option value="not_start">Chưa bắt đầu</option>
                            <option value="doing">Đang làm</option>
                            <option value="completed">Đã hoàn thành</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" id="btnAdd" class="btn btn-success" style="margin-top: 50px">Add Task</button>
                    </div>
                </div>
            </div>
            <!-- !INPUT -->

            <!-- SEARCH -->
            <div class="row">
                <label for="search" class="col-form-label col-sm-2 text-white" ><h4>Tìm kiếm</h4></label>
                <div class="col-sm-4">
                    <input type="search" id='text_search' class="form-control" placeholder="Nhập Title muốn tìm kiếm">
                </div>
                <div class="col">
                    <button class="btn btn-primary" class="search" id="btn_search"><i class="bi bi-search"></i></button>
                </div>
                
                <!-- RESULT -->
                <div id="result_search">
                    <div class="row text-white">
                        <div class="col-md-2">ID</div>
                        <div class="col-md-2">TITLE</div>
                        <div  class="col-md-2">DESC</div>
                        <div  class="col-md-2">TIMEBEGIN</div>
                        <div  class="col-md-2">TIMEEND</div>
                        <div  class="col-md-2">START</div>
                    </div>
                    <hr>
                    <div class="row text-white">
                        <div id="result_id" class="col-md-2"></div>
                        <div id="result_title" class="col-md-2"></div>
                        <div id="result_desc" class="col-md-2"></div>
                        <div id="result_timebegin" class="col-md-2"></div>
                        <div id="result_timeend" class="col-md-2"></div>
                        <div id="result_status" class="col-md-2"></div>
                    </div>
                </div>
                <!-- !RESULT -->
            </div>
            <!-- !SEARCH -->
            <hr>

            <div class="bg-primary my-5 rounded text-white p-2 text-center">
                <!-- TITLE CONTENT-->
                <div class="row">
                    <div class="col-md-1">
                        <h6>Id</h6>
                    </div>
                    <div class="col-md-2">
                        <h6>Title</h6>
                    </div>
                    <div class="col-md-2">
                        <h6>Descript</h6>
                    </div>
                    <div class="col-md-2">
                        <h6>Time Begin</h6>
                    </div>
                    <div class="col-md-2">
                        <h6>Time End</h6>
                    </div>
                    <div class="col-sm-1">
                        <h6>Status</h6>
                    </div>
                    <div class="col-sm-1 d-flex">
                        <h6>Edit</h6>
                        <h6 class="mx-5">Delete</h6>
                        <h6>Update</h6>
                    </div>
                    <hr>
                </div>  
                <!-- !TITLE CONTENT-->

                <!-- EDIT -->
                <div id="edit">
                    <div class="bg-warning py-3 text-white d-flex m-3 rounded">
                        <div class="row px-2 text-center">
                            <div class="col-md-2">
                                <label for="title" class="col-form-label text-center"><h4>Title</h4></label>
                                <input type="text" class="form-control" id="edit_title" placeholder="Nhập title">
                            </div>
                            <div class="col-md-2">
                                <label for="desc" class="col-form-label text-center"><h4>Descript</h4></label>
                                <input type="text" class="form-control"  id="edit_desc" placeholder="Nhập Descript">
                            </div>
                            <div class="col-md-2">
                                <label for="timebegin" class="col-form-label text-center"><h4>Time Begin</h4></label>
                                <input type="datetime-local" class="form-control" id="edit_timebegin" placeholder="Nhập Time Begin">
                            </div>
                            <div class="col-md-2">
                                <label for="timeend" class="col-form-label text-center"><h4>Time End</h4></label>
                                <input type="datetime-local" class="form-control" id="edit_timeend" placeholder="Nhập Time End">
                            </div>
                            <div class="col-sm-2">
                                <label for="status" class="col-form-label text-center"><h4>Status</h4></label>
                                <!-- <input type="text" class="form-control" id="edit_status" placeholder="Nhập Status"> -->
                                <select name="" id="edit_status" class="form-select">
                                    <option value="not_start">Chưa bắt đầu</option>
                                    <option value="doing">Đang làm</option>
                                    <option value="completed">Đã hoàn thành</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>        
                <!-- !EDIT -->

                <!-- CONTENT -->
                <div id="root">  
                    
                </div>
                <!-- !CONTENT -->
            </div>
        </div>
    </div>
</body>
</html>