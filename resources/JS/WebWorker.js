var worker;
function startWorker() {
    worker = new Worker("resources/JS/worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate();
}