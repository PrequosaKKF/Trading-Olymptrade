class Alert {
    public showDialog() {
        var message: string;
        message = this.getMessage();
        alert(message);
    }
    private getMessage(): string {
        return 'Hello World';
    }
}
function showAlert() {
    var alertManager = new Alert();
    alertManager.showDialog();
}