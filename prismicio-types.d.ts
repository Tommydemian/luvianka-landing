// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Homepage → Corporation Section*
 */
export interface HomepageDocumentDataCorporationSectionItem {
  /**
   * First Logo field in *Homepage → Corporation Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.corporation_section[].first_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_logo: prismic.ImageField<never>;

  /**
   * Second Logo field in *Homepage → Corporation Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.corporation_section[].second_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_logo: prismic.ImageField<never>;

  /**
   * Brief Text field in *Homepage → Corporation Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.corporation_section[].brief_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  brief_text: prismic.KeyTextField;
}

/**
 * Item in *Homepage → Contact Data*
 */
export interface HomepageDocumentDataContactDataItem {
  /**
   * Fields Header  field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].fields_header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fields_header: prismic.KeyTextField;

  /**
   * Field1 field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].field1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field1: prismic.KeyTextField;

  /**
   * Field2 field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].field2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field2: prismic.KeyTextField;

  /**
   * Field3 field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].field3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field3: prismic.KeyTextField;

  /**
   * Field4 field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].field4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field4: prismic.KeyTextField;

  /**
   * Field5 field in *Homepage → Contact Data*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[].field5
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  field5: prismic.KeyTextField;
}

type HomepageDocumentDataSlicesSlice =
  | ProductSliceSlice
  | ContentWithImageSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Titulo field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Corporation Section field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.corporation_section[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  corporation_section: prismic.GroupField<
    Simplify<HomepageDocumentDataCorporationSectionItem>
  >;

  /**
   * Contact Data field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_data[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact_data: prismic.GroupField<
    Simplify<HomepageDocumentDataContactDataItem>
  >;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Product Category → Category Products*
 */
export interface ProductCategoryDocumentDataCategoryProductsItem {
  /**
   * Product Image field in *Product Category → Category Products*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_image: prismic.ImageField<never>;

  /**
   * Product Title field in *Product Category → Category Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_title: prismic.KeyTextField;

  /**
   * Product Code field in *Product Category → Category Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_code
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_code: prismic.KeyTextField;

  /**
   * Product Type field in *Product Category → Category Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_type: prismic.KeyTextField;

  /**
   * Product Weight field in *Product Category → Category Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_weight
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_weight: prismic.KeyTextField;

  /**
   * Product Lifespan field in *Product Category → Category Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[].product_lifespan
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_lifespan: prismic.KeyTextField;
}

/**
 * Content for Product Category documents
 */
interface ProductCategoryDocumentData {
  /**
   * Product Category Image field in *Product Category*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.product_category_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_category_image: prismic.ImageField<never>;

  /**
   * Product Category Title field in *Product Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.product_category_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_category_title: prismic.KeyTextField;

  /**
   * Product Category Description field in *Product Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.product_category_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  product_category_description: prismic.RichTextField;

  /**
   * Category Products field in *Product Category*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_category.category_products[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  category_products: prismic.GroupField<
    Simplify<ProductCategoryDocumentDataCategoryProductsItem>
  >;
}

/**
 * Product Category document from Prismic
 *
 * - **API ID**: `product_category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductCategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductCategoryDocumentData>,
    "product_category",
    Lang
  >;

type ProductPageDocumentDataSlicesSlice = never;

/**
 * Content for Product Page documents
 */
interface ProductPageDocumentData {
  /**
   * Slice Zone field in *Product Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Product Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: product_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Product Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: product_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Product Page document from Prismic
 *
 * - **API ID**: `product_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductPageDocumentData>,
    "product_page",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * CTA Button field in *Settings → Navigation*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navigation[].cta_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta_button: prismic.BooleanField;

  /**
   * is Product Category field in *Settings → Navigation*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navigation[].is_product_category
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_product_category: prismic.BooleanField;
}

/**
 * Item in *Settings → Products*
 */
export interface SettingsDocumentDataProductsItem {
  /**
   * Product Name field in *Settings → Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.products[].product_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_name: prismic.KeyTextField;

  /**
   * Product Image field in *Settings → Products*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.products[].product_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_image: prismic.ImageField<never>;
}

type SettingsDocumentDataSlicesSlice = never;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Titulo del sitio field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Titulo del sitio
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Button Text field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Products field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.products[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  products: prismic.GroupField<Simplify<SettingsDocumentDataProductsItem>>;

  /**
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SettingsDocumentDataSlicesSlice> /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Content for Single Product documents
 */
interface SingleProductDocumentData {
  /**
   * Title field in *Single Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Image field in *Single Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Type field in *Single Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type: prismic.KeyTextField;

  /**
   * Code field in *Single Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.code
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  code: prismic.KeyTextField;

  /**
   * Weight field in *Single Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.weight
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  weight: prismic.KeyTextField;

  /**
   * Life Span field in *Single Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.life_span
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  life_span: prismic.KeyTextField;

  /**
   * Product Category field in *Single Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: single_product.product_category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product_category: prismic.ContentRelationshipField;
}

/**
 * Single Product document from Prismic
 *
 * - **API ID**: `single_product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SingleProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SingleProductDocumentData>,
    "single_product",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | ProductCategoryDocument
  | ProductPageDocument
  | SettingsDocument
  | SingleProductDocument;

/**
 * Item in *ContentWithImage → ImageRight → Primary → Tick Field*
 */
export interface ContentWithImageSliceImageRightPrimaryTickFieldItem {
  /**
   * Tick Icon field in *ContentWithImage → ImageRight → Primary → Tick Field*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.tick_field[].tick_icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tick_icon: prismic.KeyTextField;

  /**
   * Tick Description field in *ContentWithImage → ImageRight → Primary → Tick Field*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.tick_field[].tick_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tick_description: prismic.KeyTextField;
}

/**
 * Primary content in *ContentWithImage → Default → Primary*
 */
export interface ContentWithImageSliceDefaultPrimary {
  /**
   * Image field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * heading field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Sub Heading field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_heading: prismic.KeyTextField;

  /**
   * Description field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button text field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *ContentWithImage → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for ContentWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentWithImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ContentWithImage → ImageRight → Primary*
 */
export interface ContentWithImageSliceImageRightPrimary {
  /**
   * Image field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * heading field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Sub Heading field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_heading: prismic.KeyTextField;

  /**
   * Description field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button text field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Tick Field field in *ContentWithImage → ImageRight → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: content_with_image.imageRight.primary.tick_field[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tick_field: prismic.GroupField<
    Simplify<ContentWithImageSliceImageRightPrimaryTickFieldItem>
  >;
}

/**
 * ImageRight variation for ContentWithImage Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWithImageSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<ContentWithImageSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *ContentWithImage*
 */
type ContentWithImageSliceVariation =
  | ContentWithImageSliceDefault
  | ContentWithImageSliceImageRight;

/**
 * ContentWithImage Shared Slice
 *
 * - **API ID**: `content_with_image`
 * - **Description**: ContentWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentWithImageSlice = prismic.SharedSlice<
  "content_with_image",
  ContentWithImageSliceVariation
>;

/**
 * Item in *Footer → Default → Primary → Corporation Section*
 */
export interface FooterSliceDefaultPrimaryCorporationSectionItem {
  /**
   * First Image field in *Footer → Default → Primary → Corporation Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.corporation_section[].first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>;

  /**
   * Second Image field in *Footer → Default → Primary → Corporation Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.corporation_section[].second_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_image: prismic.ImageField<never>;

  /**
   * Brief Text field in *Footer → Default → Primary → Corporation Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.corporation_section[].brief_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  brief_text: prismic.KeyTextField;
}

/**
 * Item in *Footer → Default → Primary → Location Fields*
 */
export interface FooterSliceDefaultPrimaryLocationFieldsItem {
  /**
   * First Locatiion field in *Footer → Default → Primary → Location Fields*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.location_fields[].first_locatiion
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_locatiion: prismic.KeyTextField;
}

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * Corporation Section field in *Footer → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.corporation_section[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  corporation_section: prismic.GroupField<
    Simplify<FooterSliceDefaultPrimaryCorporationSectionItem>
  >;

  /**
   * Location Fields field in *Footer → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.default.primary.location_fields[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  location_fields: prismic.GroupField<
    Simplify<FooterSliceDefaultPrimaryLocationFieldsItem>
  >;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: La mejor carne del mercado
   * - **API ID Path**: hero.default.primary.hero_heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_heading: prismic.RichTextField;

  /**
   * Hero Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Watch out our flavorful meat and order yours today to get up to 35% discount on all new offers
   * - **API ID Path**: hero.default.primary.hero_body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_body: prismic.RichTextField;

  /**
   * Button text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Hero Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_background_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *ProductGrid → Default → Primary → Product Grid*
 */
export interface ProductSliceSliceDefaultPrimaryProductGridItem {
  /**
   * Product Image field in *ProductGrid → Default → Primary → Product Grid*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[].product_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_image: prismic.ImageField<never>;

  /**
   * Product Title field in *ProductGrid → Default → Primary → Product Grid*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[].product_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_title: prismic.KeyTextField;

  /**
   * Button text field in *ProductGrid → Default → Primary → Product Grid*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *ProductGrid → Default → Primary → Product Grid*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Product Description field in *ProductGrid → Default → Primary → Product Grid*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[].product_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_description: prismic.KeyTextField;
}

/**
 * Primary content in *ProductGrid → Default → Primary*
 */
export interface ProductSliceSliceDefaultPrimary {
  /**
   * Product Grid field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.product_grid[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_grid: prismic.GroupField<
    Simplify<ProductSliceSliceDefaultPrimaryProductGridItem>
  >;

  /**
   * Eyebrow Text field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.eyebrow_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow_text: prismic.KeyTextField;

  /**
   * Main Heading field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_slice.default.primary.main_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_heading: prismic.KeyTextField;
}

/**
 * Default variation for ProductGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductGrid*
 */
type ProductSliceSliceVariation = ProductSliceSliceDefault;

/**
 * ProductGrid Shared Slice
 *
 * - **API ID**: `product_slice`
 * - **Description**: ProductSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductSliceSlice = prismic.SharedSlice<
  "product_slice",
  ProductSliceSliceVariation
>;

/**
 * Item in *Products → Default → Primary → Product Listing*
 */
export interface ProductsSliceDefaultPrimaryProductListingItem {
  /**
   * Product field in *Products → Default → Primary → Product Listing*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: products.default.primary.product_listing[].product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product: prismic.ContentRelationshipField<"product">;
}

/**
 * Primary content in *Products → Default → Primary*
 */
export interface ProductsSliceDefaultPrimary {
  /**
   * Product Listing field in *Products → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: products.default.primary.product_listing[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_listing: prismic.GroupField<
    Simplify<ProductsSliceDefaultPrimaryProductListingItem>
  >;
}

/**
 * Default variation for Products Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Products*
 */
type ProductsSliceVariation = ProductsSliceDefault;

/**
 * Products Shared Slice
 *
 * - **API ID**: `products`
 * - **Description**: Products
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductsSlice = prismic.SharedSlice<
  "products",
  ProductsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataCorporationSectionItem,
      HomepageDocumentDataContactDataItem,
      HomepageDocumentDataSlicesSlice,
      ProductCategoryDocument,
      ProductCategoryDocumentData,
      ProductCategoryDocumentDataCategoryProductsItem,
      ProductPageDocument,
      ProductPageDocumentData,
      ProductPageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataProductsItem,
      SettingsDocumentDataSlicesSlice,
      SingleProductDocument,
      SingleProductDocumentData,
      AllDocumentTypes,
      ContentWithImageSlice,
      ContentWithImageSliceDefaultPrimary,
      ContentWithImageSliceImageRightPrimaryTickFieldItem,
      ContentWithImageSliceImageRightPrimary,
      ContentWithImageSliceVariation,
      ContentWithImageSliceDefault,
      ContentWithImageSliceImageRight,
      FooterSlice,
      FooterSliceDefaultPrimaryCorporationSectionItem,
      FooterSliceDefaultPrimaryLocationFieldsItem,
      FooterSliceDefaultPrimary,
      FooterSliceVariation,
      FooterSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductSliceSlice,
      ProductSliceSliceDefaultPrimaryProductGridItem,
      ProductSliceSliceDefaultPrimary,
      ProductSliceSliceVariation,
      ProductSliceSliceDefault,
      ProductsSlice,
      ProductsSliceDefaultPrimaryProductListingItem,
      ProductsSliceDefaultPrimary,
      ProductsSliceVariation,
      ProductsSliceDefault,
    };
  }
}
