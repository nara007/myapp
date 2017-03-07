/**
 *  This module creates a simple web application using bootleaf(including leaflet plugin leaflet-draw)
 *  Test Browser Chrome 53.0.2785.143 (64-bit), Firefox 45.0.2
 *  @date     10-17-2016
 *  @author   Ye Song<songye007@gmail.com>
 */

$(window).resize(function() {
    resizeWindow();

    var state = getDeviceState();
    if (state != lastDeviceState) {
        lastDeviceState = state;
        console.log("state changed to " + lastDeviceState);
        console.log(typeof(state));

        switchLayoutBasedOnDeviceState(state);

    }
});


function switchLayoutBasedOnDeviceState(myState) {
    // if (myState == "mobile") {
    //     console.log("");
    // }
    console.log(myState == 'mobile');
    console.log(jQuery.trim(myState));
}

// $(document).resize(function() {
//     console.log("resize");
// });

function resizeWindow() {
    $('#map').height($(window).height() - $('#toolbar-wrapper').height());

}

function bindResize(element) {

    var X, Y = 0;

    element.mousedown(function(event) {

        X = event.clientX;
        Y = event.clientY;


        // event.target.setCapture();
        // var clientX = event
        console.log(event.target);

        $(document).on("mousemove", function(e) {
            // console.log("123");
            var diff = e.clientX - X;
            var currentWidth = $("#sidebar-wrapper").width();
            // console.log(diff);
            // console.log(currentWidth);
            X = e.clientX;
            $("#sidebar-wrapper").width(currentWidth + diff);
            $("#content-wrapper").css("margin-left", currentWidth + diff + 'px');

        });
    });


    // element.mouseup(function(e) {
    //     // e.target.releaseCapture();
    //     $(document).off("mousemove");
    // });
    $(document).mouseup(function(e) {
        // e.target.releaseCapture();
        $(document).off("mousemove");
    });

}


bindResize($("#separator"));



var zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting = {};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [{
    name: "test1",
    open: true,
    icon: "./assets/img/germany-16.png",
    children: [{
        name: "test1_1"
    }, {
        name: "test1_2"
    }]
}, {
    name: "test2",
    open: true,
    children: [{
        name: "test2_1"
    }, {
        name: "test2_2"
    }]
}];
$(document).ready(function() {
    zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});


function getDeviceState() {
    var state = window.getComputedStyle(document.querySelector('.state-indicator'), '::before').getPropertyValue('content');

    return state;
}



function Building(name, email) {
    this.name = name;
    this.email = email;
}

function Command() {

}

Command.redoCommandStack = [];
Command.undoCommandStack = [];

function AddCommand() {
    this.redoParam = {};
    this.undoParam = {};
}

AddCommand.prototype.execute = function() {

    console.log("add executed");
    // buildingList.setContent("<div id='container'> <ul class='list-group' id='haus-container'> <li> <a class='list-group-item' id='haus-one' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li></ul> </div>");
    // buildingList.open();
    // buildingList.setContent("<div id='container'> <ul class='list-group' id='haus-container'> <li> <a class='list-group-item' id='haus-one' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li> <li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li></ul> </div>");
    addBuildingModel(this.redoParam.id, this.redoParam.obj);
    addTemplate(this.redoParam.id);
    // console.log(assembleContents());
    showBuildingList();
    addCallbacksForBuildingList();
};

AddCommand.prototype.unexecute = function() {

};


function addCallbacksForBuildingList() {

    for (let id in contents) {
        $("#haus-" + id).click(function() {
            $("#div-" + id).transition({ left: '150px' }, 500);

        });

        $("#haus-" + id).hover(function() {}, function() {
            $("#div-" + id).transition({ left: '250px' }, 400);
        })

        $("#btn-delete-" + id).click(function() {
            _removeBuilding(id);
        });
    }





}

function showBuildingList() {
    buildingList.setSize([280, 500]);
    buildingList.setContent(assembleContents());
    buildingList.open();
    if (listLength == 0) {
        buildingList.close();
    }
}

function addBuildingModel(_id, obj) {
    console.log(_id);
    if (buildings[_id] == undefined) {
        buildings[_id] = obj;
        listLength++;
        myID++;

    } else {
        throw "building can not be added, already exists";
    }
}

function addTemplate(id) {

    if (contents[id] == undefined) {
        contents[id] = "<li> <a class='list-group-item' id='haus-" + id + "' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='div-" + id + "'> <button type='button' class='btn btn-info btn-sm btn-round' id='btn-edit-" + id + "'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round' id='btn-delete-" + id + "'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li>";
    } else {
        throw "template can not be added, already exists";
    }
}

function assembleContents() {

    var prefix = "<div id='container'> <ul class='list-group' id='haus-container'>";
    var surffix = "</ul> </div>";
    for (let index in contents) {
        if (contents[index] != undefined) {
            prefix = prefix + contents[index];
        }
    }

    return prefix + surffix;
}


function DeleteCommand() {
    this.redoParam = {};
    this.undoParam = {};
}

DeleteCommand.prototype.execute = function() {

    if (buildings[this.redoParam.id] == undefined) {
        throw "building that you want to delete doesn't exist";
    } else {
        delete buildings[this.redoParam.id];
        listLength--;
    }

    if (contents[this.redoParam.id] == undefined) {
        throw "building template that you want to delete doesn't exist";
    } else {
        delete contents[this.redoParam.id];
    }

    showBuildingList();
    addCallbacksForBuildingList();
};

DeleteCommand.prototype.unexecute = function() {

};

function ModifyCommand() {
    this.redoParam = {};
    this.undoParam = {};
}

ModifyCommand.prototype.execute = function() {

};

ModifyCommand.prototype.unexecute = function() {

};


var form;
var buildingList;
var buildings = [];
var listLength = 0;
var contents = [];


function buildingManagerOnclick() {

    if (form != undefined) {
        form.open();
        form.isNewMarker = true;
        clearFormData();

    }
}

function registerListeners() {

    map.on("click", buildingManagerOnclick);
}

function unregisterListeners() {

    map.off("click", buildingManagerOnclick);
}

function clearFormData() {
    console.log("clearFormData  todo");
}

function showMarkers() {
    console.log("showmarkers  todo");
}


var myID = 0;

function _addBuilding(id, buildingObj) {
    var mybuilding = new Building("budapester", "123@gmail.com");

    var command = new AddCommand();
    command.redoParam = { "id": myID, "obj": mybuilding };
    command.undoParam = { "id": myID, "obj": mybuilding };

    Command.undoCommandStack.push(command);

    command.execute();
}


function onSave() {
    if (form.isNewMarker) {
        _addBuilding(1, 2);
    }
}

function _removeBuilding(id) {

    var command = new DeleteCommand();
    var obj = _getBuildingByID(id);
    command.redoParam = { "id": id };
    command.undoParam = { "id": id, "obj": obj };

    Command.undoCommandStack.push(command);
    command.execute();
}

function _getBuildingByID(id) {

    return buildings[id];
}

function initBuildingManager() {


    // 创建状态指示元素
    var indicator = document.createElement('div');
    indicator.className = 'state-indicator';
    document.body.appendChild(indicator);

    $('#map').height($(window).height() - $('#toolbar-wrapper').height());
    map = L.map('map').setView([51.05, 13.71], 10, { dragging: true });
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">',
        maxZoom: 18
    }).addTo(map);



    var resetFormData = function() {

    }

    var isActive = false;
    var DWidth = 300;
    var DHeight = 300;
    var MWidth = $('#map').width();
    var MHeight = $('#map').height();
    var startLeft = (MWidth - DWidth) / 2;
    var startTop = (MHeight - DHeight) / 2;

    var BuildingListWidth = 280;
    var BuildingListHeight = MHeight * 4 / 5;
    var BStartLeft = MWidth - BuildingListWidth - 12;
    var BStartTop = 0;


    function activate() {

        //todo 禁止双击 拖拽事件

        if (isActive == false) {
            isActive = true;

            if (form == undefined) {
                form = L.control.dialog()
                    // .setContent("<form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><label class='control-label' for='inputPassword'>Password</label><div class='controls'><input type='password' id='inputPassword' placeholder='Password'></div></div><div class='control-group'><div class='controls'><button type='button' class='btn' id='btn_save' onclick='dosomething()'>save</button></div></div></form>");
                    .setContent("<form class='form-horizontal' target='rfFrame' id='signupForm'><div class='control-group'><label class='control-label' for='inputName'>Name</label><div class='controls'><input type='text' id='inputName' placeholder='Name'></div></div><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input class='required email' type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><div class='controls'><button type='submit' class='btn' id='btn_save'>save</button></div></div></form><iframe id='rfFrame' name='rfFrame' src='about:blank' style='display:none;'></iframe>");
                map.addControl(form);
                form.setLocation([startTop, startLeft]);
                form.close();
                validator = $("#signupForm").validate({
                    submitHandler: function(myForm) {
                        onSave();
                        form.close();
                        myForm.submit();
                    }
                });
            } else {

            }

            if (buildingList == undefined) {
                buildingList = L.control.dialog({ maxSize: [700, 700] })
                    .setContent();
                map.addControl(buildingList);
                buildingList.freeze();
                buildingList.setLocation([BStartTop, BStartLeft]);
                // buildingList.setSize([BuildingListWidth, BuildingListHeight]);
                buildingList.setSize([280, 500]);

                //todo 设置dialoglist的大小 位置 并且close
                buildingList.close();
            } else {
                buildingList.open();

            }

            showMarkers();

            registerListeners();
            clearFormData();
            //todo 注册 map on click 事件(可封装为函数)， 回调函数不要用匿名函数，目的是为了保持可添加可删除
            //todo  每次open form的时候 要注意清空 提示信息 清空表单数据(可封装为函数)
            //todo 是否需要重新显示所有markers
        } else {

        }
    }


    var myDialog;
    var validator;
    activate();
    // map.on('click', function() {

    //     if (myDialog == undefined) {
    //         myDialog = L.control.dialog()
    //             // .setContent("<form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><label class='control-label' for='inputPassword'>Password</label><div class='controls'><input type='password' id='inputPassword' placeholder='Password'></div></div><div class='control-group'><div class='controls'><button type='button' class='btn' id='btn_save' onclick='dosomething()'>save</button></div></div></form>");
    //             .setContent("<form class='form-horizontal' id='signupForm'><div class='control-group'><label class='control-label' for='inputName'>Name</label><div class='controls'><input type='text' id='inputName' placeholder='Name'></div></div><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input class='required email' type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><div class='controls'><button type='submit' class='btn' id='btn_save'>save</button></div></div></form>");
    //         map.addControl(myDialog);

    //         var DWidth = 300;
    //         var DHeight = 300;
    //         var MWidth = $('#map').width();
    //         var MHeight = $('#map').height();
    //         var startLeft = (MWidth - DWidth) / 2;
    //         var startTop = (MHeight - DHeight) / 2;



    //         myDialog.setLocation([startTop, startLeft]);
    //         validator = $("#signupForm").validate({
    //             submitHandler: function(form) {
    //                 console.log("12345");
    //                 myDialog.close();
    //                 form.submit();
    //             }
    //         });
    //     } else {

    //         myDialog.open();
    //         validator.resetForm();
    //         resetFormData();
    //         var DWidth = 300;
    //         var DHeight = 300;
    //         var MWidth = $('#map').width();
    //         var MHeight = $('#map').height();
    //         var startLeft = (MWidth - DWidth) / 2;
    //         var startTop = (MHeight - DHeight) / 2;



    //         myDialog.setLocation([startTop, startLeft]);
    //     }






    //     // $("#signupForm").validate({
    //     //     submitHandler: function(form) {
    //     //         form.submit();
    //     //     }
    //     // });



    //     // $("#signupForm").submit(function() {
    //     //     console.log("12345");
    //     // });

    //     // map.on('dialog:closed', function(e) {

    //     //     console.log(e);
    //     //     console.log(e._content);
    //     //     if (e._content.includes("id='signupForm'")) {


    //     //         // map.removeLayer(myDialog);
    //     //         console.log("hello");
    //     //         console.log(myDialog);
    //     //         console.log("hello2");
    //     //         myDialog.destroy();
    //     //     }

    //     // });

    // });

    lastDeviceState = getDeviceState();
}




var map;

function init() {

    // 创建状态指示元素
    var indicator = document.createElement('div');
    indicator.className = 'state-indicator';
    document.body.appendChild(indicator);

    $('#map').height($(window).height() - $('#toolbar-wrapper').height());
    // //initialize map in center of Sachsen,  zoom 8
    // var map = L.map('map').setView([51.01375, 13.41431], 8);

    // //define different wms layers in a layer manager 
    // var basemaps = {
    //     Gelaendehoehe: L.tileLayer.wms('https://geodienste.sachsen.de/wms_geosn_hoehe/guest?', {
    //         layers: 'Gelaendehoehe'
    //     }),

    //     Relief: L.tileLayer.wms('https://geodienste.sachsen.de/wms_geosn_hoehe/guest?', {
    //         layers: 'Relief'
    //     }),

    //     Relief_DOM: L.tileLayer.wms('https://geodienste.sachsen.de/wms_geosn_hoehe/guest?', {
    //         layers: 'Relief_DOM'
    //     }),

    //     Hoehendifferenz: L.tileLayer.wms('https://geodienste.sachsen.de/wms_geosn_hoehe/guest?', {
    //         layers: 'Hoehendifferenz'
    //     }),

    //     Hoehe_Oberflaeche: L.tileLayer.wms('https://geodienste.sachsen.de/wms_geosn_hoehe/guest?', {
    //         layers: 'Hoehe_Oberflaeche'
    //     })
    // };

    // L.control.layers(basemaps, null, { collapsed: false }).addTo(map);

    // //the first image shown in the card, initialization
    // basemaps.Gelaendehoehe.addTo(map);


    map = L.map('map').setView([51.05, 13.71], 10, { dragging: true });
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">',
        maxZoom: 18
    }).addTo(map);

    // $(window).resize();
    console.log("`123`45");

    // var polyline = new L.polyline([
    //     [51.80607748386585, 13.1],
    //     [51.601428064502886, 14.1]
    // ], {
    //     color: 'blue',
    //     opacity: 0.5,
    //     weight: 3
    // }).addTo(map);

    // var bounds = [
    //     [54.559322, -5.767822],
    //     [56.1210604, -3.021240]
    // ]; //默认需要给定一个坐标，要不然js会报错

    var poly_points = []; //区域
    // var rectangle = L.rectangle(bounds, { color: "#ff7800", weight: 3 }).addTo(map);
    var bounds;
    var rec;
    var originalRec = map.getBounds();
    var boundsSet = [];

    boundsSet.push(originalRec);

    function onMouseDown(e) {

        // var myrec = map.getBounds();
        // map.fitBounds(myrec);
        map.dragging.disable();
        L.DomEvent.preventDefault(e);
        L.DomUtil.disableImageDrag();
        console.log("mousedown...");
        var clickLocation = [e.latlng.lat, e.latlng.lng];
        var moveLocation = [];


        poly_points.push(clickLocation);
        map.on('mousemove', function(e) {

            console.log("mousemove");
            if (typeof(rec) != "undefined") {
                map.removeLayer(rec);
            }

            bounds = [
                clickLocation, [e.latlng.lat, e.latlng.lng]
            ];
            // rec.removeFrom(map);
            rec = L.rectangle(bounds, {
                color: '#ff7800',
                opacity: 0.9,
                weight: 1
            }).addTo(map);

            // L.latLngBounds(clickLocation, [e.latlng.lat, e.latlng.lng]).addTo(map);


            // var southWest = L.latLng(clickLocation[0], clickLocation[1]),
            //     northEast = L.latLng(e.latlng.lat, e.latlng.lng),
            //     bounds = L.latLngBounds(southWest, northEast);
        });

        // map.on('mouseup', onMouseUp);



    }

    function onMouseUp(e) {

        console.log("mouseup");
        map.off('mousemove');
        // map.off('dragstart');
        // map.off('drag');
        // map.off('dragend');


        if (typeof(rec) != "undefined") {
            map.removeLayer(rec);
            rec = undefined;
            map.fitBounds(bounds);
            boundsSet.push(bounds);
        }

        map.dragging.enable();

    }

    // map.on('mousedown', onMouseDown);
    // map.on('mouseup', onMouseUp);



    var greenIcon = L.icon({
        iconUrl: 'assets/img/office-building.png',

        iconSize: [32, 37], // size of the icon
        // shadowSize: [32, 37], // size of the shadow
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0], // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    // L.marker([51.05, 13.71], {icon: greenIcon}).addTo(map);

    var marker = new L.Marker([51.05, 13.71], { icon: greenIcon });
    map.addLayer(marker);



    $("#ori1").click(function() {
        var bound = boundsSet.pop();
        map.fitBounds(bound);
    });

    $("#ori2").click(function() {
        map.removeLayer(marker);
    });

    $("#ori3").click(function() {
        map.addLayer(marker);
    });

    var dialog, buildingContainer;

    $("#ori4").click(function() {
        dialog = L.control.dialog()
            // .setContent("<form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><label class='control-label' for='inputPassword'>Password</label><div class='controls'><input type='password' id='inputPassword' placeholder='Password'></div></div><div class='control-group'><div class='controls'><button type='button' class='btn' id='btn_save' onclick='dosomething()'>save</button></div></div></form>");
            .setContent("<form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><label class='control-label' for='inputPassword'>Password</label><div class='controls'><input type='password' id='inputPassword' placeholder='Password'></div></div><div class='control-group'><div class='controls'><button type='button' class='btn' id='btn_save'>save</button></div></div></form>");
        map.addControl(dialog);
        dialog.freeze();

        $("#btn_save").click(function() {
            console.log("123");
            $("#ori7").trigger("click");
        });
    });

    $("#ori5").click(function() {
        dialog.close();
    });



    $("#ori7").click(function() {
        map.removeControl(dialog);
        dialog.destroy();
    });

    $("#ori8").click(function() {
        dialog.setLocation([15, 15]);
    });

    $("#ori9").click(function() {
        buildingContainer.setSize([150, 750]);
    });

    $("#ori10").click(function() {
        buildingContainer = L.control.dialog({ maxSize: [700, 700] })
            // .setContent("<form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Email</label><div class='controls'><input type='text' id='inputEmail' placeholder='Email'></div></div><div class='control-group'><label class='control-label' for='inputPassword'>Password</label><div class='controls'><input type='password' id='inputPassword' placeholder='Password'></div></div><div class='control-group'><div class='controls'><button type='button' class='btn' id='btn_save' onclick='dosomething()'>save</button></div></div></form>");
            .setContent("<div id='container'> <ul class='list-group' id='haus-container'> <li> <a class='list-group-item' id='haus-one' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li> <li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li><li> <a class='list-group-item' href='#'><img src='assets/img/Home-48.png'><span>Hausname</span> <div id='abc'> <button type='button' class='btn btn-info btn-sm btn-round'><span class='glyphicon glyphicon-pencil'></span></button> <button type='button' class='btn btn-danger btn-sm btn-round'><span class='glyphicon glyphicon-remove'></span></button> </div> </a> </li></ul> </div>");
        map.addControl(buildingContainer);
        buildingContainer.freeze();
        buildingContainer.setLocation([50, 50]);
        buildingContainer.setSize([300, 400]);

        $("#haus-one").click(function() {
            console.log("haus-one");

            // $("#abc").css("display", "inline-block");
            $("#abc").transition({ left: '150px' }, 500);

        });

        $("#ori6").click(function() {
            buildingContainer.open();
        });

        $("#haus-one").hover(function() {}, function() {
            $("#abc").transition({ left: '250px' }, 400);
        })

    });





    lastDeviceState = getDeviceState();


}



function dosomething() {
    console.log("123");
}
