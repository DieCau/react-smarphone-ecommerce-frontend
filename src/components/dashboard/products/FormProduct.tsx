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

export const FormProduct = ({ titleForm }: Props) => {
  // This component is used to create or update a product.
  // It uses react-hook-form for form handling and validation.
  // It also uses zod for schema validation.
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

  const { slug } = useParams<{ slug: string }>();

  const { product, isLoading } = useProduct(slug || '');
  const { mutate: createProduct, isPending } = useCreateProduct();
  const { mutate: updateProduct, isPending: isUpdatePending } =
    useUpdateProduct(product?.id || '');

  const navigate = useNavigate();

  // This effect is used to set the form values when the product data is loaded.
  // It checks if the product exists and if the data is not loading.
  // If the product exists, it sets the form values using setValue from react-hook-form
  // It maps the product features and variants to the expected format for the form.
  // It also sets the initial content for the description editor.
  // This ensures that the form is pre-populated with the existing product data when editing.
  // If the product is being created, it will not set any values.
  // This effect runs whenever the product data changes or when the loading state changes.
  // It is important to ensure that the form is correctly populated with the product data
  // when editing an existing product, and that the form is empty when creating a new product
  // This is done to provide a better user experience and to avoid having to fill in the
  // form fields manually when editing a product.
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
