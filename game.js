document.addEventListener('DOMContentLoaded', () => {
    const meerkat = document.getElementById('meerkat');
    const pointsDisplay = document.getElementById('points');
    const foodItems = document.querySelectorAll('.food-item');
    
    let points = 0;
    let canFeed = true;

    // Add click event listeners to food items
    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!canFeed) return;
            
            // Get points value from data attribute
            const pointValue = parseInt(item.dataset.points);
            
            // Disable feeding temporarily
            canFeed = false;
            
            // Animate meerkat
            meerkat.classList.add('happy');
            
            // Update points
            points += pointValue;
            pointsDisplay.textContent = points;
            
            // Create and animate food
            const food = document.createElement('div');
            food.style.position = 'absolute';
            food.style.fontSize = '2rem';
            food.style.left = '50%';
            food.style.bottom = '50%';
            food.textContent = item.textContent.trim().split(' ')[0]; // Get emoji
            food.style.transform = 'translateX(-50%)';
            food.style.transition = 'all 0.5s ease';
            food.style.pointerEvents = 'none';
            
            document.querySelector('.game-area').appendChild(food);
            
            // Animate food moving to meerkat
            setTimeout(() => {
                food.style.bottom = '100px';
                food.style.opacity = '0';
            }, 50);
            
            // Remove food element and reset meerkat
            setTimeout(() => {
                food.remove();
                meerkat.classList.remove('happy');
                canFeed = true;
            }, 600);
            
            // Save points to localStorage
            localStorage.setItem('meerkatPoints', points);
        });
    });
    
    // Load saved points from localStorage
    const savedPoints = localStorage.getItem('meerkatPoints');
    if (savedPoints) {
        points = parseInt(savedPoints);
        pointsDisplay.textContent = points;
    }
    
    // Add hover effect to meerkat
    meerkat.addEventListener('mouseover', () => {
        if (canFeed) {
            meerkat.style.transform = 'translateX(-50%) rotate(5deg)';
        }
    });
    
    meerkat.addEventListener('mouseout', () => {
        meerkat.style.transform = 'translateX(-50%) rotate(0deg)';
    });
});
