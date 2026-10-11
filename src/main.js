// arquivo de entrada da aplicação, centralizando todas as importações. 
"use strict"

// configraçao do day.js
import "./libs/dayjs.js"

// CSS
import "./styles/global.css";
import "./styles/form.css";
import "./styles/schedule.css";

import dayjs from "dayjs"
console.log(dayjs().format("DD/MM/YYYY HH:mm:ss"))