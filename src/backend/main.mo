import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

actor {
  type Product = {
    id : Nat;
    name : Text;
    category : Category;
    price : Nat;
    description : Text;
    inStock : Bool;
  };

  type Category = {
    #Mobile;
    #TV;
    #AC;
    #Refrigerator;
    #WashingMachine;
    #Laptop;
  };

  type StoreInfo = {
    name : Text;
    phone : Text;
    address : Text;
    email : Text;
  };

  let products = Map.fromIter<Nat, Product>([
    (
      1,
      {
        id = 1;
        name = "iPhone 13";
        category = #Mobile;
        price = 1000;
        description = "Apple smartphone";
        inStock = true;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Samsung 55'' 4K TV";
        category = #TV;
        price = 800;
        description = "Samsung ultrahd TV";
        inStock = true;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Daikin Split AC";
        category = #AC;
        price = 500;
        description = "Daikin air conditioner";
        inStock = false;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Bosch Refrigerator";
        category = #Refrigerator;
        price = 700;
        description = "Bosch energy efficient refrigerator";
        inStock = true;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "LG Washing Machine";
        category = #WashingMachine;
        price = 400;
        description = "LG top load washing machine";
        inStock = true;
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Dell XPS 13";
        category = #Laptop;
        price = 1200;
        description = "Dell ultrabook laptop";
        inStock = true;
      },
    ),
  ].values());

  let storeInfo : StoreInfo = {
    name = "Gülhane Electronics";
    phone = "+90 212 123 4567";
    address = "İstanbul, Turkey";
    email = "info@gulhaneelectronics.com";
  };

  public query ({ caller }) func getProduct(id : Nat) : async ?Product {
    products.get(id);
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().filter(
      func(p) { p.category == category }
    ).toArray();
  };

  public query ({ caller }) func getStoreInfo() : async StoreInfo {
    storeInfo;
  };
};
