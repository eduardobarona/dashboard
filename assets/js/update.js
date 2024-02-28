
let runScripts = () => {
    let chart_bars = document.getElementById("chart_bars");
    console.log(chart_bars);
    let icons = document.getElementsByTagName("i");
    console.log(icons);
    let cards = document.getElementsByClassName("card");
    console.log(cards);
};

let modifyText = () => {
    let listOfp = document.getElementsByTagName("p");
    let elementP = listOfp[3];
    elementP.innerHTML = "Dinero Actual";
    elementP = listOfp[5];
    elementP.innerHTML = "Usuarios de Hoy";
    elementP = listOfp[7];
    elementP.innerHTML = "Nuevos Clientes";
    elementP = listOfp[9];
    elementP.innerHTML = "Ventas";

    let pageData = {
        root: 'Principal',
        title: 'Panel de control',
        color: 'text-dark',
        version: '3.2.0'
    };
      
    let { root, color, title, ...others } = pageData;
      
    let message = `
    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
        <li class="breadcrumb-item text-sm"><a class="opacity-5 ${color}">${root}</a></li>
        <li class="breadcrumb-item text-sm ${color} active" aria-current="page">${title}</li>
    </ol>
    <h6 class="font-weight-bolder mb-0">${title}</h6>`; 

    let listOfNavs = document.getElementsByTagName('nav');
    let navElement = listOfNavs[1];
    navElement.innerHTML = message;

    let data = [
        {title: 'Usuarios Actuales',
         value: '3,200'},
        {title: 'Nuevos Clientes',
         value: '4,215'}, 
        {title: 'Ventas',
         value: '$121,520'}
    ];

    let [user, clientes, sales] = data;

    let {title: title_user , value: value_user} = user;
    let {title: title_clientes , value: value_clientes} = clientes;
    let {title: title_sales , value: value_sales} = sales;

     
    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_user}</p><h4 class="mb-0">${value_user}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clientes}</p><h4 class="mb-0">${value_clientes}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

    let listOfElements = document.getElementsByClassName('text-end pt-1');

    let[, second, third, fourth] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

    
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior',
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior',
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer',
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer',
        }
      ];

    let porcentaje_de_cambio_dinero= (cambios[0].valor_actual - cambios[0].valor_previo)*100/cambios[0].valor_previo;
    let porcentaje_de_cambio_usuario= (cambios[1].valor_actual - cambios[1].valor_previo)*100/cambios[1].valor_previo;
    let porcentaje_de_cambio_clientes= (cambios[2].valor_actual - cambios[2].valor_previo)*100/cambios[2].valor_previo;
    let porcentaje_de_cambio_ventas= (cambios[3].valor_actual - cambios[3].valor_previo)*100/cambios[3].valor_previo;


    let listOfPercentaje = document.getElementsByClassName('card-footer p-3');

    let percentaje_dinero = `<p class="mb-0"><span class="text-${porcentaje_de_cambio_dinero>0 ? "success" : "danger"} text-sm font-weight-bolder">${porcentaje_de_cambio_dinero>0 ? "+" + porcentaje_de_cambio_dinero.toFixed(2) : porcentaje_de_cambio_dinero.toFixed(2)}</span> ${cambios[0].mensaje_tiempo}</p>`;
    let percentaje_usuario = `<p class="mb-0"><span class="text-${porcentaje_de_cambio_usuario>0 ? "success" : "danger"} text-sm font-weight-bolder">${porcentaje_de_cambio_usuario>0 ? "+" + porcentaje_de_cambio_usuario.toFixed(2) : porcentaje_de_cambio_usuario.toFixed(2)}</span> ${cambios[1].mensaje_tiempo}</p>`;
    let percentaje_clientes = `<p class="mb-0"><span class="text-${porcentaje_de_cambio_clientes>0 ? "success" : "danger"} text-sm font-weight-bolder">${porcentaje_de_cambio_clientes>0 ? "+" + porcentaje_de_cambio_clientes.toFixed(2) : porcentaje_de_cambio_clientes.toFixed(2)}</span> ${cambios[2].mensaje_tiempo}</p>`;
    let percentaje_ventas = `<p class="mb-0"><span class="text-${porcentaje_de_cambio_ventas>0 ? "success" : "danger"} text-sm font-weight-bolder">${porcentaje_de_cambio_ventas>0 ? "+" + porcentaje_de_cambio_ventas.toFixed(2) : porcentaje_de_cambio_ventas.toFixed(2)}</span> ${cambios[3].mensaje_tiempo}</p>`;

    let[, secondPercen, thirdPercen, fourthPercen] = listOfPercentaje;

    console.log("AQUI");
    console.log(listOfPercentaje);

    let percentaje_dinero_actual = document.getElementsByClassName("mb-0");
    let perDinActual = percentaje_dinero_actual[8];
    let perDinUsuario = percentaje_dinero_actual[11];
    let perDinClientes = percentaje_dinero_actual[14];
    let perDinVentas = percentaje_dinero_actual[17];
    perDinActual.innerHTML = percentaje_dinero;
    perDinUsuario.innerHTML = percentaje_usuario;
    perDinClientes.innerHTML = percentaje_clientes;
    perDinVentas.innerHTML = percentaje_ventas;
    console.log("ULTIMO HEY")
    console.log(percentaje_dinero_actual[12]);

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301K";
};

runScripts();
modifyText();
