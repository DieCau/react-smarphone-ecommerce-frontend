import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';
import { productSchema } from '../../../lib/validators';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { SectionFormProduct } from './SectionFormProduct';
import { InputForm } from './InputForm';
import { FeaturesInput } from './FeaturesInput';
import { useEffect } from 'react';
import { generateSlug } from '../../../helpers';
import { VariantsInput } from './VariantsInput';
import { UploaderImages } from './UploaderImages';
import { Editor } from './Editor';
import { useCreateProduct, useProduct, useUpdateProduct } from '../../../hooks';
import { Loader } from '../../shared/Loader';
import type { JSONContent } from '@tiptap/react';

interface Props {
  titleForm: string;
}

// Este componente se utiliza para crear o actualizar un producto.
// Utiliza react-hook-form para la gestión y validación de formularios.
// También utiliza zod para la validación del esquema.

export const FormProduct = ({ titleForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  // useParams se utiliza para obtener los parámetros de la URL, en este caso, el slug del producto.
  // Esto es útil para determinar si se está creando un nuevo producto o editando uno existente
  // y para cargar los datos del producto si se está editando.
  // El slug es una cadena única que identifica al producto en la URL.
  // Si el slug está presente, significa que se está editando un producto existente.
  // Si no está presente, significa que se está creando un nuevo producto.
  // useParams devuelve un objeto con los parámetros de la URL, en este caso, el slug del producto.
  // El tipo de slug se define como una cadena, lo que significa que
  // se espera que el slug sea una cadena de texto que representa el identificador del producto
  // en la URL. Si el slug no está presente, se utilizará una cadena vacía por defecto.
  // Esto permite que el componente maneje tanto la creación como la edición de productos
  // de manera flexible y reutilizable.

  const { slug } = useParams<{ slug: string }>();

  const { product, isLoading } = useProduct(slug || '');
  const { mutate: createProduct, isPending } = useCreateProduct();
  const { mutate: updateProduct, isPending: isUpdatePending } =
    useUpdateProduct(product?.id || '');

  const navigate = useNavigate();

  // Este useEffect se utiliza para establecer los valores del formulario al cargar los datos del producto.
  // Comprueba si el producto existe y si los datos no se están cargando. Si el producto existe,
  // establece los valores del formulario mediante setValue de react-hook-form.
  // Asigna las características y variantes del producto al formato esperado del formulario.
  // También establece el contenido inicial del editor de descripciones.
  // Esto garantiza que el formulario se rellene previamente con los datos del producto al editarlo.
  // Si se está creando el producto, no se establecerá ningún valor.
  // Este efecto se ejecuta siempre que cambien los datos del producto o el estado de carga.
  // Es importante asegurarse de que el formulario se rellene correctamente con los datos del producto
  // al editar un producto existente y de que esté vacío al crear uno nuevo.
  // Esto se hace para ofrecer una mejor experiencia de usuario y evitar tener que rellenar los campos
  // del formulario manualmente al editar un producto.

  useEffect(() => {
    if (product && !isLoading) {
      setValue('name', product.name);
      setValue('slug', product.slug);
      setValue('brand', product.brand);
      setValue(
        'features',
        product.features.map((f: string) => ({ value: f }))
      );
      setValue('description', product.description as JSONContent);
      setValue('images', product.images);
      setValue(
        'variants',
        product.variants.map((v) => ({
          id: v.id,
          stock: v.stock,
          price: v.price,
          storage: v.storage,
          color: v.color,
          colorName: v.color_name,
        }))
      );
    }
  }, [product, isLoading, setValue]);

  // Esta función se encarga de manejar el envío del formulario.
  // Utiliza handleSubmit de react-hook-form para validar los datos del formulario.
  // Si el slug está presente, significa que se está actualizando un producto existente,
  // por lo que se llama a la función updateProduct con los datos del formulario.
  // Si el slug no está presente, significa que se está creando un nuevo producto,
  // por lo que se llama a la función createProduct con los datos del formulario.
  // Ambas funciones (createProduct y updateProduct) son mutaciones que se encargan de
  // enviar los datos al servidor para crear o actualizar el producto.
  // Los datos del formulario incluyen el nombre, la marca, el slug, las variantes,
  // las imágenes, la descripción y las características del producto.
  const onSubmit = handleSubmit((data) => {
    const features = data.features.map((feature) => feature.value);

    if (slug) {
      updateProduct({
        name: data.name,
        brand: data.brand,
        slug: data.slug,
        variants: data.variants,
        images: data.images,
        description: data.description,
        features,
      });
    } else {
      createProduct({
        name: data.name,
        brand: data.brand,
        slug: data.slug,
        variants: data.variants,
        images: data.images,
        description: data.description,
        features,
      });
    }
  });

  const watchName = watch('name');

  useEffect(() => {
    if (!watchName) return;

    const generatedSlug = generateSlug(watchName);
    setValue('slug', generatedSlug, { shouldValidate: true });
  }, [watchName, setValue]);

  if (isPending || isUpdatePending || isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            className="bg-white p-1.5 rounded-md shadow-sm border border-slate-200 transition-all group hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack
              size={18}
              className="transition-all group-hover:scale-125"
            />
          </button>
          <h2 className="font-bold tracking-tight text-2xl capitalize">
            {titleForm}
          </h2>
        </div>
      </div>

      <form
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max flex-1"
        onSubmit={onSubmit}
      >
        <SectionFormProduct
          titleSection="Detalles del Producto"
          className="lg:col-span-2 lg:row-span-2"
        >
          <InputForm
            type="text"
            placeholder="Ejemplo: iPhone 13 Pro Max"
            label="nombre"
            name="name"
            register={register}
            errors={errors}
            required
          />
          <FeaturesInput control={control} errors={errors} />
        </SectionFormProduct>

        <SectionFormProduct>
          <InputForm
            type="text"
            label="Slug"
            name="slug"
            placeholder="iphone-13-pro-max"
            register={register}
            errors={errors}
          />

          <InputForm
            type="text"
            label="Marca"
            name="brand"
            placeholder="Apple"
            register={register}
            errors={errors}
            required
          />
        </SectionFormProduct>

        <SectionFormProduct
          titleSection="Variantes del Producto"
          className="lg:col-span-2 h-fit"
        >
          <VariantsInput
            control={control}
            errors={errors}
            register={register}
          />
        </SectionFormProduct>

        <SectionFormProduct titleSection="Imágenes del producto">
          <UploaderImages errors={errors} setValue={setValue} watch={watch} />
        </SectionFormProduct>

        <SectionFormProduct
          titleSection="Descripción del producto"
          className="col-span-full"
        >
          <Editor
            setValue={setValue}
            errors={errors}
            initialContent={product?.description as JSONContent}
          />
        </SectionFormProduct>

        <div className="flex gap-3 absolute top-0 right-0">
          <button
            className="btn-secondary-outline"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </button>
          <button className="btn-primary" type="submit">
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  );
};
