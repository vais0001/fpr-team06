import './bootstrap';

import Alpine from 'alpinejs';
import {data} from "autoprefixer";

window.Alpine = Alpine;

Alpine.start();

window.onload = function () {
    const url = window.location.href;
    if(url.includes('import')) {
        loadRoomsImport();
    }
}
function loadRoomsImport() {
    const mainContent = document.getElementById('mainContent');
    const tableContainer = document.createElement('div');
    tableContainer.id = 'tableContainer';
    mainContent.appendChild(tableContainer);

    const rooms = JSON.parse(document.getElementById('world-map').dataset.maps);
    console.log(rooms);
    document.querySelectorAll('.roomContainer').forEach(roomSpecificContainer => {
        roomSpecificContainer.addEventListener('click', function() {
            tableContainer.innerHTML = '';
            const table = document.createElement('table');
            table.id = 'table';
            table.className = 'table-auto w-full text-white text-center';
            tableContainer.appendChild(table);

            const tableHead = document.createElement('thead');
            tableHead.id = 'tableHead';
            table.appendChild(tableHead);

            const tableHeadRow = document.createElement('tr');
            tableHeadRow.id = 'tableHeadRow';
            tableHeadRow.className = 'px-4 py-2 text-white text-center';
            tableHead.appendChild(tableHeadRow);

            const tableBody = document.createElement('tbody');
            tableBody.id = 'tableBody';
            table.appendChild(tableBody);

            for (let j = 0; j < 3; j++) {
                const tableHeadCell = document.createElement('th');
                tableHeadCell.id = 'tableHeadCell';
                tableHeadCell.className = 'px-4 py-2';
                switch (j) {
                    case 0:
                        tableHeadCell.innerHTML = 'Time';
                        break;
                    case 1:
                        tableHeadCell.innerHTML = 'Co2';
                        break;
                    case 2:
                        tableHeadCell.innerHTML = 'Temperature';
                        break;
                }
                tableHeadRow.appendChild(tableHeadCell);
            }

            let result = '';
            rooms[event.target.parentNode.id-1]['room_time'].forEach(room => {
                result += `<tr>
                 <td>${room.time}</td>
                 <td>${room.co2}</td>
                 <td>${room.temperature}</td>
                 </tr>`;
                });
            tableBody.innerHTML = result;

            const importButton = document.createElement('button');
            importButton.id = 'importButton';
            importButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute';
            importButton.innerHTML = 'Import';
            importButton.type = 'submit';

            importButton.addEventListener('click', function () {
                document.getElementById('set_room').value = event.target.parentNode.id
                document.getElementById('importForm').submit();
            });
            roomSpecificContainer.appendChild(importButton);

            roomSpecificContainer.addEventListener('mouseleave', function() {
                importButton.remove();
                roomSpecificContainer.firstChild.className = 'text-2xl text-gray-500 font-bold dark:hover:text-white';
            });
        });
    });
}
