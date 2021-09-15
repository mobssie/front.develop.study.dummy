wmpProducts () {
  return this.CURATION_PRODUCTS.map(curationProd => ({
    ...curationProd,
    imageURL: curationProd.imageURL
  }));
}