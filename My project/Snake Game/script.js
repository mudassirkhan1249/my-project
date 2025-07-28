        const canvas = document.getElementById('game');
        const ctx = canvas.getContext('2d');
        const grid = 20;
        let snake = [{x: 160, y: 200}];
        let dx = grid, dy = 0;
        let food = {x: 0, y: 0};
        let score = 0;
        let gameOver = false;

        function randomFood() {
            food.x = Math.floor(Math.random() * (canvas.width / grid)) * grid;
            food.y = Math.floor(Math.random() * (canvas.height / grid)) * grid;
            // Avoid spawning food on the snake
            if (snake.some(s => s.x === food.x && s.y === food.y)) randomFood();
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw food
            ctx.fillStyle = '#f00';
            ctx.fillRect(food.x, food.y, grid, grid);

            // Draw snake
            ctx.fillStyle = '#0f0';
            snake.forEach((s, i) => {
                ctx.fillRect(s.x, s.y, grid, grid);
            });

            // Draw score
            ctx.fillStyle = '#fff';
            ctx.font = '16px Arial';
            ctx.fillText('Score: ' + score, 10, 20);
        }

        function update() {
            if (gameOver) return;

            // Move snake
            const head = {x: snake[0].x + dx, y: snake[0].y + dy};

            // Wall collision
            if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
                gameOver = true;
                alert('Game Over! Your score: ' + score);
                document.location.reload();
                return;
            }

            // Self collision
            if (snake.some(s => s.x === head.x && s.y === head.y)) {
                gameOver = true;
                alert('Game Over! Your score: ' + score);
                document.location.reload();
                return;
            }

            snake.unshift(head);

            // Food collision
            if (head.x === food.x && head.y === food.y) {
                score++;
                randomFood();
            } else {
                snake.pop();
            }
        }

        function loop() {
            update();
            draw();
            if (!gameOver) setTimeout(loop, 100);
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft' && dx === 0) { dx = -grid; dy = 0; }
            else if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -grid; }
            else if (e.key === 'ArrowRight' && dx === 0) { dx = grid; dy = 0; }
            else if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = grid; }
        });

        randomFood();
        loop();