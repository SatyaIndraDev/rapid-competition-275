import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Productslider.css";
import Slider from "react-slick";
import ProductCard from "../ProductsData/ProductCard";
import { Box } from "@chakra-ui/react";
const Productslider = () => {
  const products = [
    {
      type: "primers",
      name: "SUGAR Prime Sublime Primer - Brightening",
      price: "₹499.00",
      actual_price: 499,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/BrighteningPrimer.jpg?v=1666886739",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Model-Brightening-Primer.jpg?v=1666886741",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1.jpg?v=1666873373",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images2.jpg?v=1666873373",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.8(274)",
    },
    {
      type: "primers",
      name: "Mettle Priming Balm",
      price: "₹1099.00",
      actual_price: 1099,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/382512098-mettle-priming-balm-03.jpg?v=1648654866",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/382512104-mettle-priming-balm-04.jpg?v=1648654868",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.8(274)",
    },
    {
      type: "primers",
      name: "Base Of Glory Pore Minimizing Primer",
      price: "₹799.00",
      actual_price: 799,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/5_1_5d67622f-a55f-49b6-b667-9d6573c9b1f5.jpg?v=1657257149",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/5_1_5d67622f-a55f-49b6-b667-9d6573c9b1f5.jpg?v=1657257149",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/3_387d934a-e3ce-4752-b70e-2710d685b7bc.jpg?v=1657257149",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.8(274)",
    },
    {
      type: "primers",
      name: "The Most Eligiblur Correcting Primer - 02 Onward Orange (Orange)",
      price: "₹799.00",
      actual_price: 799,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_270fb7dc-e51b-4c12-8bcf-18919fd35415.jpg?v=1652942969",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_e4f47f55-6186-4de9-8b08-a60f89a29e57.jpg?v=1652942969",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_38019f47-c091-4391-acd2-07b452115a47.jpg?v=1652976031",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/4_354b55b4-ab22-4bda-b4e7-5eccc522ad15.jpg?v=1652942969",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.3(174)",
    },
    {
      type: "primers",
      name: "Face Fwd  Primer Stick",
      price: "₹799.00",
      actual_price: 799,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-primer-stick-13825409417299.jpg?v=1619116598",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-primer-stick-14330457030739.jpg?v=1619116600",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-primer-stick-14330457030739.jpg?v=1619116600",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-primer-stick-13824753795155.jpg?v=1619116604",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.6(74)",
    },
    {
      type: "primers",
      name: "The Most Eligiblur Smoothing Primer",
      price: "₹849.00",
      actual_price: 849,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-most-eligiblur-smoothing-primer-28122626162771.jpg?v=1619115330",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-most-eligiblur-smoothing-primer-14270759436371.jpg?v=1619115333",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-most-eligiblur-smoothing-primer-28122626195539.jpg?v=1619115334",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-most-eligiblur-smoothing-primer-13607201538131.jpg?v=1619115337",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.3(38)",
    },
    {
      type: "primers",
      name: "The Most Eligiblur Correcting Primer - 03 Jade Jockey (Green)",
      price: "₹649.00",
      actual_price: 649,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_944437bb-7ed0-423f-bdbf-153ad7fefcde.jpg?v=1652942992",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_689d2f98-191e-4e1b-948e-39dca576a8ab.jpg?v=1652942992",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_689d2f98-191e-4e1b-948e-39dca576a8ab.jpg?v=1652942992",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/4_f1c8aafe-4f51-44a7-aa7d-2336f084b9a1.jpg?v=1652943004",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "4.8(389)",
    },
    {
      type: "primers",
      name: "The Most Eligiblur Correcting Primer - 01 Peach Precedent (Peach)",
      price: "₹549.00",
      actual_price: 549,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2170e342-a8fc-4fb4-a5ea-5f0c8bedbfdf.jpg?v=1652942866",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_1268d25b-dcf4-43f8-9fd8-ee83b33e0dc0.jpg?v=1652942866",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/2_1268d25b-dcf4-43f8-9fd8-ee83b33e0dc0.jpg?v=1652942866",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/4_46dace73-190c-4634-8859-dab9dfb5ba85.jpg?v=1652942883",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "5.0(9)",
    },
    {
      type: "primers",
      name: "Prime Sublime Depuffing Primer",
      price: "₹489.00",
      actual_price: 489,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Depuffing-Primer.jpg?v=1666886769",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Model-Depuffing-Primer.jpg?v=1666886772",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_f299c073-7bc2-48b4-a705-77932c05815c.jpg?v=1666886774",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images2_255d2402-5024-4388-b331-ce17b2a9583b.jpg?v=1666886777",
      ],
      feature: "primer",
      formulation: "cream",
      concern: "Brightening",
      rating: "5.0(87)",
    },
    {
      type: "powder",
      name: "All Set To Go Translucent Powder",
      price: "₹599.00",
      actual_price: 599,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-translucent-powder-14376568324179.jpg?v=1626752637",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/4_8.jpg?v=1626795162",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-translucent-powder-12785059922003.jpg?v=1626752637",
      ],
      feature: "Translucent Powder",
      formulation: "Loose Powder",
      concern: "oil control",
      rating: "4.8(512)",
    },
    {
      type: "powder",
      name: "All Set To Go Banana Powder",
      price: "₹599.00",
      actual_price: 599,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-translucent-powder-14376568324179.jpg?v=1626752637",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/4_8.jpg?v=1626795162",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-translucent-powder-12785059922003.jpg?v=1626752637",
      ],
      feature: "Translucent Powder",
      formulation: "Loose Powder",
      concern: "oil control",
      rating: "4.8(146)",
    },
    {
      type: "powder",
      name: "Set The Tone Tinted Powder - 10 Latte (Light)",
      price: "₹699.00",
      actual_price: 699,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/10_c8b72d1d-5416-4c78-9013-d4199d68ba3a.jpg?v=1648741240",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/10_c8b72d1d-5416-4c78-9013-d4199d68ba3a.jpg?v=1648741240",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-set-the-tone-tinted-powder-10-latte-light-13437913301075.jpg?v=1648699746",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-set-the-tone-tinted-powder-10-latte-light-13437913301075.jpg?v=1648699746",
      ],
      feature: "Translucent Powder",
      formulation: "Loose Powder",
      concern: "oil control",
      rating: "4.2(946)",
    },
    {
      type: "compact",
      name: "Dream Cover SPF15 Mattifying Compact - 10 Latte (light)",
      price: "₹399.00",
      actual_price: 399,
      images: [
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-12775602454611.jpg?v=1619106458",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-14376511701075.jpg?v=1619106460",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-14376511701075.jpg?v=1619106460",
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-12775602520147.jpg?v=1619106464",
      ],
      feature: "Translucent Powder",
      formulation: "Pressed Powder",
      concern: "under eye",
      rating: "4.7(224)",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      mt={10}
      mb={10}
      bg="#07025c"
      pt={10}
      pb={10}
      ml={{ base: "-40px", md: "none" }}
    >
      <Slider {...settings}>
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </Slider>
    </Box>
  );
};

export default Productslider;
