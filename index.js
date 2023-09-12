// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
    const daysOfWeek = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
                    ];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    return dayOfWeek;
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
    const currentTime = new Date().getTime();
    return currentTime;
}

// Update the elements with real-time data
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfTheWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});
