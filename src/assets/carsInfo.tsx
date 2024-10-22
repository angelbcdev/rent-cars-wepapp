type TFeatures =
  | "4 puertas"
  | "Levantavidrios eléctricos"
  | "ABS"
  | "2 maleta(s) grande(s)"
  | "5 personas"
  | "Aire acondicionado"
  | "Cierre centralizado"
  | "Automático"
  | "Dir. Asistida Eléctrica"
  | "2 maleta(s) pequena(s)";

type TCategoría =
  | "SEDAN"
  | "SEDAN_PREMIUM"
  | "HYBRID"
  | "SUV"
  | "SPORT"
  | "ECONOMIC"
  | "MINIVAN"
  | "VAN"
  | "TRUCK";

export type TCarro = {
  brand: string;

  category: TCategoría;
  engineSize: number;
  features: TFeatures[];
  id: number;
  image: string;
  model: string;
  modelYear: number;
  passengers: number;
  price: number;
  stock: number;
};

const carros: TCarro[] = [];

// Ajusta los objetos de acuerdo a la interfaz

carros.push({
  id: 1,
  brand: "Toyota",
  model: "Corolla",

  category: "SEDAN_PREMIUM",
  engineSize: 1.8,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/xtikoYwuXfEgI2wX1-3MukgLl5SeVmgOsre4iCHNtwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8xRjBF/Nzc1MTZENUU3NzYy/NzhCMzBEMDc4NEQ2/QjBGMEREOTE3QjRB/MkE0Qzk3QkIyMkYw/Q0NCNUNBODIxM0I1/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMDBU/T0MwNDFCMDIxMDAx/LmpwZw",
  modelYear: 2022,
  passengers: 5,
  price: 62,
  stock: 5,

});

carros.push({
  id: 2,
  brand: "Dodge",
  model: "Challenger",
  category: "SPORT",
  engineSize: 3.6,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/t8K_y-ZuxAlcgCbSEgSLovB75gut-Y3cTGLiArnqyRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wREQ3/ODhBNTkyNkY0NkRD/NjExRUI5MDIyRkE0/Q0IxQzdBODg2MUVC/OTMzMEMwNUVFMEM1/MEMyOUY5RDA1Mjk2/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDOTBE/T0MxOTFBMDIxMDAx/LmpwZw",
  modelYear: 2021,
  passengers: 4,
  price: 82,
  stock: 0,
});

carros.push({
  id: 3,
  brand: "Chevrolet",
  model: "Tahoe",
  category: "SUV",
  engineSize: 5.3,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/2uAH17XpmnPcmXvXRy7Yf4ibcOJxss6yrgxc-q0wNuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS81Q0U1/REQxNTU5MjQ3RkQw/QkFBQzkyNkVDQUM0/QjcyMjM0ODRFNjFB/NUU2NjgxRDlDNTVE/OUMxMTJERDQyNUVB/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMTBD/SFMxMTJEMDIxMDAx/LmpwZw",
  modelYear: 2021,
  passengers: 7,
  price: 159,
  stock: 3,
});

carros.push({
  id: 4,
  brand: "Nissan",
  model: "Versa",
  category: "HYBRID",
  engineSize: 1.6,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/5tX2C9y-zsGda9OtWRgbO8RDL0iUOWrK8iaQGJzFdTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9FNDFC/ODkyOUM3RUExQTQ3/NTMzODc4REVDNjgx/NURENTVBQjBCMUND/RjFFOUVFOTBGQTZD/ODdEQUFDQUI1NERD/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBO/SUMxMDFCMDIxMDAx/LmpwZw",
  modelYear: 2021,
  passengers: 5,
  price: 70,
  stock: 5,
});

carros.push({
  id: 5,
  brand: "Ford",
  model: "Transit",
  category: "VAN",
  engineSize: 3.5,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/Tk_hI8SwFw_041kHxodiRSch6ej7yqeTDwzFiOGKrhI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9DRDcz/RERENDNEOTczRUY2/RTNBNURFMjIwMjZF/RjE4NTQ2QTg2QTI5/N0JCQjkyQ0Q2NjI3/NEQyN0Q4QkU3NTNF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T1YzMzFCMDIxMDAx/LmpwZw",
  modelYear: 2020,
  passengers: 15,
  price: 210,
  stock: 5,
});

carros.push({
  id: 6,
  brand: "Chevrolet",
  model: "Express",
  category: "VAN",
  engineSize: 4.3,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/Nuh8Pgk4GOhs7MFrfBp2TsKmP3bgXEpeMMvxjyspceY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hldnJvbGV0LmNv/bS9jb250ZW50L2Rh/bS9jaGV2cm9sZXQv/bmEvdXMvZW5nbGlz/aC9pbmRleC92ZWhp/Y2xlcy8yMDI0L2Nv/bW1lcmNpYWwvZXhw/cmVzcy12YW5zLzAx/LWltYWdlcy9pbnZl/bnRvcnktaW50ZXJz/aXRpYWwvMjAyNC1l/eHByZXNzLTF3dC1n/YXotZHJpdmVyLWZy/b250LTNxdWFydGVy/LW5hdi5qcGc_aW13/aWR0aD05NjA",
  modelYear: 2019,
  passengers: 2,
  price: 130,
  stock: 0,
});

carros.push({
  id: 7,
  brand: "Ford",
  model: "Mustang Convertible",
  category: "SPORT",
  engineSize: 2.3,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/kINILkloJvH0i7kPAxos6x_pZa9yfZzN8FhVBa9ZSo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2Ftdi1wcm9k/LWNhZC1hc3NldHMu/czMuYW1hem9uYXdz/LmNvbS92ZGF0L3N1/Ym1vZGVscy9mb3Jk/X211c3RhbmdfZm9y/ZC1tdXN0YW5nLWNv/bnZlcnRpYmxlXzIw/MjEtMTY0NDg2Mzcy/NjAxNy5qcGc_Zmls/bD0xODoxMSZyZXNp/emU9NjQwOio",
  modelYear: 2020,
  passengers: 4,
  price: 310,
  stock: 5,
});

carros.push({
  id: 8,
  brand: "Audi",
  model: "A5",
  category: "SEDAN_PREMIUM",
  engineSize: 2.0,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/-UryBK7fFAFOkCH8pdPl8xF2QRYzLfgdCfUulQ-Oj2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9CNTE3/REU0RjRBQUE0OENG/Qzk2RUZDODExMjUz/OThBQzMyRjgyMDhF/MzcxQTk1RDhDN0E4/QkMzMUQyRUI0MzQy/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMDBB/VUMxOTFBMDIxMDAx/LmpwZw",
  modelYear: 2021,
  passengers: 5,
  price: 140,
  stock: 5,
});

carros.push({
  id: 9,
  brand: "Toyota",
  model: "Prius",
  category: "HYBRID",
  engineSize: 1.8,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/RTvnkDH9t5AkDmutjRuqAjN8F251dwxyAdpi_bFtL04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Nl/M2M2ODE2NzhlNWJj/MDYxNGQ2Y2UwOTFj/YmY3MmRiNGM5NzY0/ZDEvaHViLzIwMTYv/MDQvMTIvNGU1NDY5/ZjYtNDQ2ZC00ODg3/LThhMjAtZWUwZTAw/ZmJkMjdjLzIwMTZ0/b3lvdGFwcml1c2Zv/dXItMDU4MDMuanBn/P2F1dG89d2VicCZ3/aWR0aD0xMjAw",
  modelYear: 2020,
  passengers: 5,
  price: 80,
  stock: 5,
});

carros.push({
  id: 10,
  brand: "Honda",
  model: "Civic",
  category: "ECONOMIC",
  engineSize: 1.5,
  features: [
    "4 puertas",
    "Levantavidrios eléctricos",
    "ABS",
    "2 maleta(s) grande(s)",
    "5 personas",
    "Aire acondicionado",
    "Cierre centralizado",
    "Automático",
    "Dir. Asistida Eléctrica",
    "2 maleta(s) pequena(s)"
  ],
  image: "https://imgs.search.brave.com/VmMTuJT8e6JVloMV4Wp8iCrpRl6w3o2M5ASYG5X5Yjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzEwNTZ4NjYw/L24vY3cvZWMvMTQz/Mjc5L25ldy1jaXR5/LXJpZ2h0LWZyb250/LXRocmVlLXF1YXJ0/ZXItMi5qcGVnP2lz/aWc9MCZxPTgw",
  modelYear: 2022,
  passengers: 5,
  price: 70,
  stock: 8,
});

export default carros;

export const iconFeature = {
  "4 puertas": "",
  "Levantavidrios eléctricos": "",
  ABS: "",
  "2 maleta(s) grande(s)": "",
  "5 personas": "",
  "Aire acondicionado": "",
  "Cierre centralizado": "",
  Automático: "",
  "Dir. Asistida Eléctrica": "",
  "2 maleta(s) pequena(s)": "",
};
