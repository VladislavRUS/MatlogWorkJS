var graph;
function check(value){
    value++;
    graph = generate(value);
    var n = graph[0].length-1;
    while(hamCycle(graph) === true){
            var rI = Math.floor(Math.random() * (n)) + 0;
            var rJ = Math.floor(Math.random() * (n)) + 0;
            graph[rI][rJ] = 0;
            graph[rJ][rI] = 0;
    } 
    $("#matrixPlace").append('Graph matrix with no Hamilton cycle!<br>');
    printGraph(graph);
    startGraph();
}

function printGraph(graph){
    $("#matrixPlace").html('');
    $("#matrixPlace").append('Матрица графа: <br>');    
    var n = graph[0].length;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            $("#matrixPlace").append(graph[i][j] + ' ');        
        }
        $("#matrixPlace").append('<br>');
    }
    $("#matrixPlace").append('<br>');
}

document.getElementById('btn').onclick = function(){
    var value = document.getElementById('amount').value;
    if(value == ''){
        alert('Enter value!');
    }
    else{
        check(value);
    }
}