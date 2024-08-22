import React from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";
import { GroupField } from "@prismicio/client";
import {
  ProductCategoryDocumentDataCategoryProductsItem,
  Simplify,
} from "../../prismicio-types";

type ProductCardGridProps = {
  products:
    | GroupField<Simplify<ProductCategoryDocumentDataCategoryProductsItem>>
    | undefined;
};

export const ProductCardGrid: React.FC<ProductCardGridProps> = ({
  products,
}) => {
  return (
    <Section>
      <Container className="pp-product-card-grid">
        {products?.map(
          ({
            product_code,
            product_image,
            product_lifespan,
            product_title,
            product_type,
            product_weight,
            quantity_per_box,
            weight_per_box,
          }) => {
            return (
              <article key={product_code} className="pp-product-card">
                <div className="pp-product-card__image-wrapper">
                  <PrismicNextImage
                    field={product_image}
                    className="pp-product-card__image"
                  />
                </div>
                <div className="pp-product-card__info">
                  <h3 className="pp-product-card__info-title">
                    {product_title}
                  </h3>
                  <p className="pp-product-card__info-type">{product_type}</p>
                  <div className="pp-product-card__sub-info-blocks">
                    <div className="pp-product-card__sub-info-block">
                      <p className="pp-product-card__sub-info-block-label">
                        Codigo
                      </p>
                      <p className="pp-product-card__sub-info-block-value">
                        {product_code}
                      </p>
                    </div>
                    <div className="pp-product-card__sub-info-block">
                      <p className="pp-product-card__sub-info-block-label">
                        Peso
                      </p>
                      <p className="pp-product-card__sub-info-block-value">
                        {product_weight}
                      </p>
                    </div>
                    <div className="pp-product-card__sub-info-block">
                      <p className="pp-product-card__sub-info-block-label">
                        Vida Util
                      </p>
                      <p className="pp-product-card__sub-info-block-value">
                        {product_lifespan}
                      </p>
                    </div>
                    <div className="pp-product-card__sub-info-block">
                      <p className="pp-product-card__sub-info-block-label">
                        Cantidad por caja
                      </p>
                      <p className="pp-product-card__sub-info-block-value">
                        {quantity_per_box}
                      </p>
                    </div>
                    <div className="pp-product-card__sub-info-block">
                      <p className="pp-product-card__sub-info-block-label">
                        Peso por caja
                      </p>
                      <p className="pp-product-card__sub-info-block-value">
                        {weight_per_box}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </Container>
    </Section>
  );
};
