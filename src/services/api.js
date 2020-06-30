import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/**
* iOs com emulador: localhost
* iOs com físico: IP da máquina (mac -> network -> IP adress)
* windows: terminal -> run "ip config"
* Android com Emulador: localhost:3333 -> run on terminal "adb reverse tcp:3333 tcp:3333"
* Android com Emulador: 10.0.2.2 Andoid Studio)
* Android com Emulador: 10.0.3.2 Genymotion)
* Android com físico: IP da máquina 
* linux: settings -> wifi -> settings da rede conectada -> IPv4 == IP (em casa 192.168.0.17)
*/