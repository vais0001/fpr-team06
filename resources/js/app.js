import './bootstrap';

import Alpine from 'alpinejs';
import {data} from "autoprefixer";

window.Alpine = Alpine;

Alpine.start();

window.onload = function () {
    const url = window.location.href;
    if(url.includes('rooms')) {
        loadRoomsImport();
    }
}
function loadRoomsImport() {
    const tableBody = document.getElementById('tableBody');

    const rooms = JSON.parse(document.getElementById('world-map').dataset.maps);
    console.log(rooms);
    document.querySelectorAll('.roomContainer').forEach(roomSpecificContainer => {
        roomSpecificContainer.addEventListener('click', function() {

            if(roomSpecificContainer.lastChild.id === 'roomButtonsContainer'){
                roomSpecificContainer.lastChild.remove();
            }
            tableBody.innerHTML = '';
            console.log(event.target.id);
            console.log(rooms[event.target.parentNode.id-1]);
            if(event.target.id === 'roomName'){

                let result = '';
                rooms[event.target.parentNode.id-1]['room_time'].forEach(room => {
                    result += `<tr>
                     <td>${room.time}</td>
                     <td>${room.co2}</td>
                     <td>${room.temperature}</td>
                     </tr>`;
                });

                tableBody.innerHTML = result;
            }

            const roomButtonsContainer = document.createElement('div');
            roomButtonsContainer.id = 'roomButtonsContainer';
            roomButtonsContainer.className = 'flex flex-row justify-center absolute';
            roomButtonsContainer.style.marginLeft = '-65px';
            roomSpecificContainer.appendChild(roomButtonsContainer);

            const editButton = document.createElement('button');
            editButton.id = 'editButton';
            editButton.className = 'hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
            editButton.innerHTML = 'Edit';
            editButton.type = 'submit';

            roomButtonsContainer.appendChild(editButton);

            editButton.addEventListener('click', function () {
                const form = document.getElementById('editForm');
                form.action = `/rooms/${event.target.parentNode.parentNode.id}/edit`;
                form.submit();
            });

            const revertButton = document.createElement('button');
            revertButton.id = 'revertButton';
            revertButton.className = 'hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
            revertButton.innerHTML = 'Revert';
            revertButton.type = 'submit';

            roomButtonsContainer.appendChild(revertButton);

            revertButton.addEventListener('click', function () {
                document.getElementById('set_room_destroy').value = event.target.parentNode.parentNode.id
                document.getElementById('destroyForm').submit();
            });

            const importButton = document.createElement('button');
            importButton.id = 'importButton';
            importButton.className = 'hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
            importButton.innerHTML = 'Import';
            importButton.type = 'submit';

            importButton.addEventListener('click', function () {
                document.getElementById('set_room').value = event.target.parentNode.parentNode.id
                document.getElementById('importForm').submit();
            });
            roomButtonsContainer.appendChild(importButton);

            roomSpecificContainer.addEventListener('mouseleave', function() {
                importButton.remove();
                revertButton.remove();
                editButton.remove();
                roomSpecificContainer.firstChild.className = 'text-2xl text-gray-500 font-bold dark:hover:text-white';
            });
        });
    });
}

document.querySelectorAll('.addContainer').forEach(addContainer => {
   addContainer.addEventListener('click', function() {
       document.location.href = `/rooms/create?floor=${event.target.id}`;
   });
});
