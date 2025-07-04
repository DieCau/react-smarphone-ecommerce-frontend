export const AboutPage = () => {
  return (
    // This is the AboutPage component
    // It displays information about the company
    // and its mission, vision, and values
    // It also includes a contact section for inquiries
    // and a background image to enhance the visual appeal
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-5">
        Nuestra empresa
      </h1>

      <img
        src="https://plus.unsplash.com/premium_photo-1682716270464-9a91cbbcf3b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWRpZmljaW8lMjBkZSUyMGxhJTIwZW1wcmVzYXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Imagen de fondo"
        className="h-[500px] w-full object-cover"
      />

      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          SmartPhones es una tienda en línea que se dedica a la venta de
          celulares, fundada en 2021. Nuestro objetivo es ofrecer a nuestros
          clientes la mejor calidad y precio en celulares. Contamos con un
          equipo de profesionales que se encargan de seleccionar los mejores
          productos para ti.
        </p>

        <p>
          En SmartPhones podrás encontrar una amplia variedad de celulares
          de las mejores marcas. Además, contamos con promociones y descuentos
          exclusivos para que puedas comprar tu celular al mejor precio.
        </p>

        <h2 className="text-3xl font-semibold tracking-tighh mt-8 mb-4">
          ¡No esperes más y compra tu celular en SmartPhones!
        </h2>

        <p>
          Para más información, no dudes en ponerte en contacto con nosotros, a
          través de nuestro correo electrónico:
          <a href="mailto:correo@SmartPhones.com">
            correo@smartPhones.com
          </a>{' '}
          o llamado al <a href="#">3815678913</a>
        </p>
      </div>
    </div>
  );
};
