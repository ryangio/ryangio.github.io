(function () {
    document.addEventListener('DOMContentLoaded', event => {
        const spotContainer = document.getElementById('spot_container');
        const nameInput = document.getElementById('name_input');

        for (let i = 0; i < 6; i++) {
            let spotName = `Spot ${i}`;
            const spot = document.createElement('div');
            spot.className = 'example-spot';
            spot.innerHTML = `<span>${spotName}<span>`;
            spotContainer.appendChild(spot);
            spot.addEventListener('click', () => {
                if (!nameInput.value) {
                    return;
                }

                window.location.href = `mailto:test@example.com?subject=RequestSpot ${i}&body=My name is ${nameInput.value} and I want to request spot ${i}. Thank you!`;
            });
        }
    }); 
}());
