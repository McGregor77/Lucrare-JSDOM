function centeredBall() {
    const field = document.getElementById('field');
    const ball = document.getElementById('ball');
    if (field && ball) {
        ball.style.top = ((field.clientHeight / 2) - (ball.clientHeight / 2)) + 'px';
        ball.style.left = ((field.clientWidth / 2) - (ball.clientWidth / 2)) + 'px';

        console.log(ball, (field.clientHeight / 2) - (ball.clientHeight / 2), (field.clientWidth / 2) - (ball.clientWidth / 2))
    }
}

new ResizeObserver(() => centeredBall()).observe(document.getElementById('field'));