export function countdown(hours, minutes, seconds, onUpdate, onComplete) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    let countdownInterval = setInterval(() => {
        let daysRemaining = Math.floor(totalSeconds / 86400);
        let hoursRemaining = Math.floor((totalSeconds % 86400) / 3600);
        let minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
        let secondsRemaining = totalSeconds % 60;

        onUpdate({
            days: daysRemaining,
            hours: hoursRemaining,
            minutes: minutesRemaining,
            seconds: secondsRemaining,
        });

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            onComplete();
        }

        totalSeconds--;
    }, 1000);

    return countdownInterval;
}
