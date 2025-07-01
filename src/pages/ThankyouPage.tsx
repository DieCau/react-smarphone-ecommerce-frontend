import { Link, useNavigate, useParams } from 'react-router-dom';
import { useOrder, useUser } from '../hooks';
import { Loader } from '../components/shared/Loader';
import { CiCircleCheck } from 'react-icons/ci';
import { formatPrice } from '../helpers';
import { useEffect } from 'react';
import { supabase } from '../supabase/client';

// ThankyouPage
export const ThankyouPage = () => {
  // Obtiene el ID de la orden desde los parámetros de la URL
  // Utiliza el hook useOrder para obtener los datos de la orden
  // y el estado de carga y error.
  // Utiliza el hook useUser para obtener la sesión del usuario y el estado de carga.
  // Si hay un error al cargar la orden, muestra un mensaje de error.
  // Si la orden se está cargando o no hay datos, muestra un loader.
  // Si la sesión del usuario se está cargando, muestra un loader.
  // Si la orden se carga correctamente, muestra los detalles de la orden
  // y un mensaje de agradecimiento al usuario.
  // Además, se asegura de que el usuario esté autenticado y redirige a la
  // página de login si no lo está.
  // Finalmente, muestra los detalles del pedido, incluyendo los productos,
  // el total, la información de contacto, el método de pago y la dirección de envío
  // y un botón para seguir comprando.
  // También muestra un mensaje de agradecimiento al usuario por su compra.
  // El componente utiliza el icono CiCircleCheck para mostrar un check de confirmación.
  // El componente utiliza el helper formatPrice para formatear los precios de los productos.
  // El componente utiliza el hook useParams para obtener el ID de la orden desde la URL
  // y el hook useNavigate para redirigir al usuario a la página de login si no está autenticado.
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useOrder(Number(id));
  const { isLoading: isLoadingSession } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate('/login');
      }
    });
  }, [navigate]);

  if (isError) return <div>Error al cargar la orden</div>;

  if (isLoading || !data || isLoadingSession) return <Loader />;

  return (
    // Renderiza la página de agradecimiento con los detalles de la orden
    // y un mensaje de confirmación.
    // Utiliza clases de Tailwind CSS para el estilo y diseño responsivo.
    // Utiliza el componente Link de react-router-dom para navegar a la página de inicio
    // y el icono CiCircleCheck de react-icons para mostrar un check de confirmación
    // Utiliza el helper formatPrice para formatear los precios de los productos.
    // Utiliza el hook useParams para obtener el ID de la orden desde la URL
    // y el hook useNavigate para redirigir al usuario a la página de login si no está autenticado.
    // Utiliza el hook useEffect para escuchar los cambios en el estado de autenticación
    // y redirigir al usuario a la página de login si no está autenticado.
    // Utiliza el hook useOrder para obtener los datos de la orden y el estado de carga y error.
    // Utiliza el hook useUser para obtener la sesión del usuario
    // y el estado de carga.
    // Utiliza el icono CiCircleCheck para mostrar un check de confirmación.
    // Utiliza el helper formatPrice para formatear los precios de los productos.
    // Utiliza clases de Tailwind CSS para el estilo y diseño responsivo.
    // Utiliza el componente Link de react-router-dom para navegar a la página de inicio.
    // Utiliza el componente Loader para mostrar un loader mientras se cargan los datos.
    // Utiliza el componente useParams para obtener el ID de la orden desde la URL.
    // Utiliza el componente useNavigate para redirigir al usuario a la página de login
    // si no está autenticado.
    // Utiliza el componente useEffect para escuchar los cambios en el estado de autenticación
    // y redirigir al usuario a la página de login si no está autenticado.
    // Utiliza el componente useOrder para obtener los datos de la orden y el estado de carga y error.
    // Utiliza el componente useUser para obtener la sesión del usuario y el estado de carga.
    // Utiliza el componente formatPrice para formatear los precios de los productos.
    // Utiliza el componente CiCircleCheck para mostrar un check de confirmación.
    // Utiliza el componente Link para navegar a la página de inicio.
    // Utiliza el componente Loader para mostrar un loader mientras se cargan los datos.
    // Utiliza el componente useParams para obtener el ID de la orden desde la URL.
    // Utiliza el componente useNavigate para redirigir al usuario a la página de login
    // si no está autenticado.  
    <div className="flex flex-col h-screen">
      <header className="text-black flex items-center justify-center flex-col px-10 py-12">
        <Link
          to="/"
          className="text-4xl font-bold self-center tracking-tighter transition-all md:text-5xl"
        >
          <p>
            Celulares
            <span className="text-cyan-600">Baratos</span>
          </p>
        </Link>
      </header>
      
      {/* Section Main */}
      <main className="container flex-1 flex flex-col items-center gap-10">
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={40} />

          <p className="text-4xl">¡Gracias, {data.customer.full_name}!</p>
        </div>

        <div className="border border-slate-200 w-full md:w-[600px] p-5 rounded-md space-y-3">
          <h3 className="font-medium">Tu pedido está confirmado</h3>

          <p className="text-sm">
            Gracias por realizar tu compra en Celularesbaratos. Para realizar la
            transferencia te compartimos los siguientes datos
          </p>

          <div className="space-y-0.5 text-sm">
            <p>BANCO PICHINCHA</p>
            <p>Razón Social: CelularesBaratos</p>
            <p>RUC: 123456789000</p>
            <p>Tipo de cuenta: Corriente</p>
            <p>Número de cuenta: 1234567890</p>
          </div>

          <p className="text-sm">
            Una vez realizada la transferencia, comparte tu comprobante a
            ventas@celularesbaratos.com para procesarla y hacerte la entrega de
            tu dispositivo a domicilio.
          </p>
        </div>

        <div className="border border-slate-200 w-full p-5 rounded-md space-y-3 md:w-[600px]">
          <h3 className="font-medium">Detalles del pedido</h3>

          <div className="flex flex-col gap-5">
            <ul className="space-y-3">
              {data.orderItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-3"
                >
                  <div className="flex">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <p className="font-semibold">{item.productName}</p>
                      <p className="text-sm font-medium text-gray-600 mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <p className="text-[13px] text-gray-600">
                        {item.storage} / {item.color_name}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">
                {formatPrice(data.totalAmount)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Información de contacto:</p>
              <p>{data.customer.email}</p>
            </div>

            <div className="flex flex-col text-sm">
              <p className="font-semibold">Métodos de pago:</p>
              <p>Deposito bancario - {formatPrice(data.totalAmount)}</p>
            </div>

            <div className="flex flex-col text-sm">
              <p className="font-semibold">Dirección de envío</p>
              <p>{data.address.addressLine1}</p>
              <p>{data.address.addressLine2 && data.address.addressLine2}</p>
              <p>{data.address.city}</p>
              <p>{data.address.state}</p>
              <p>{data.address.postalCode}</p>
              <p>{data.address.country}</p>
            </div>

            <div className="flex flex-col text-sm">
              <p className="font-semibold">Método de envío</p>
              <p>Standard</p>
            </div>
          </div>
        </div>

        {/* Botón para seguir comprando */}
        <div className="flex flex-col justify-between items-center w-full mb-5 gap-3 sm:flex-row md:w-[600px] md:gap-0">
          <p className="text-sm">
            ¿Necesitas ayuda? Ponte en contacto con nosotros
          </p>

          <Link
            to="/celulares"
            className="text-white bg-black py-4 text-sm rounded-md px-5 tracking-tight font-semibold"
          >
            Seguir comprando
          </Link>
        </div>
      </main>
    </div>
  );
};
