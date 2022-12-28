const products = ["Signature Fiberglass Fabric", "Signature Graphite Coated Fiberglass Fabric", "Signature Silicon coated Fiberglass Fabric", "Signature Asbestos Fabric", "Signature Aluminium Coated Fiberglass Fabric", "Signature Ceramic Fiber Fabric", "Signature Vermiculite Coated Ceramic Fabric", "Signature Vermiculite Coated Fiberglass Fabric", "Signature High Silica Fabric", "Signature Silicon Coated Silica Fabric", "Signature PTFE Coated Fiberglass Fabric", "Signature Aluminum Fire Suit", "Signature Ceramic Insulation Blanket", "Signature Ceramic Fiber Board", "Signature Ceramic Fiber Paper", "Signature Fiberglass Tape", "Signature Ceramic Fiber Tape", "Signature Fiberglass Rope", "Signature Ceramic Fiber Rope", "Signature Asbestos Rope", "Signature Asbestos Tape", "Signature Graphite Gland Packing Rope", "Signature PTFE Gland Packing Rope", "Signature Fire Blanket", "Signaure Silicon Fire Blanket", "Signaure Medium Duty Welding Blanket", "Signature Graphite Fire Blanket", "Signature Welding Blanket", "Signature Non Asbestos Blanket", "Signature Car Fire Blanket", "Signature Fire Retardant Tarpuline", "Signature FIre Retardant Canvas Fabric", "Signature Fire Curtain", "Signature Welding Curtain", "Signature Carbonshield Blanket", "Signature Insulation Pad"];

const productDetails = [
    {

        "Signature Fiberglass Fabric": {
            "products": {
                "DSZFG0.18": {

                    "data": {
                        "Thickness": "0.18 mm",
                        "Weight(GSM)": "100",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.18",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "400 Meter",
                    "Min Rate": "40",
                    "Standard Rate": "60",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.2": {

                    "data": {
                        "Thickness": "0.2 mm",
                        "Weight(GSM)": "200",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.2",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "400 Meter",
                    "Min Rate": "50",
                    "Standard Rate": "80",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.3": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "200",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "100 Meter",
                    "Min Rate": "55",
                    "Standard Rate": "85",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Weight(GSM)": "280",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "100 Meter",
                    "Min Rate": "75",
                    "Standard Rate": "130",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "420",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "100 Meter",
                    "Min Rate": "100",
                    "Standard Rate": "150",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "430",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.6",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "100 Meter",
                    "Min Rate": "120",
                    "Standard Rate": "180",
                    "Selling Unit": "SQM"
                },
                "DSZFG0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "800",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "200",
                    "Standard Rate": "280",
                    "Selling Unit": "SQM"
                },
                "DSZFG1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Weight(GSM)": "840",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"

                    },
                    "ModleNo": "DSZFG1.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "300",
                    "Selling Unit": "SQM"
                },
                "DSZFG1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Weight(GSM)": "900",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG1.2",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZFG1.5 950GSM 1X50 Meter": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "950",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG1.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "200",
                    "Standard Rate": "280",
                    "Selling Unit": "SQM"
                },
                "DSZFG2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "1050",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG2.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "250",
                    "Standard Rate": "330",
                    "Selling Unit": "SQM"
                },
                "DSZFG2.5": {
                    "data": {
                        "Thickness": "2.5 mm",
                        "Weight(GSM)": "1300",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG2.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "300",
                    "Standard Rate": "400",
                    "Selling Unit": "SQM"
                },
                "DSZFG3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1850",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFG3.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "450",
                    "Standard Rate": "550",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Graphite Coated Fiberglass Fabric": {
            "products": {
                "DSZGF0.2": {
                    "data": {
                        "Thickness": "0.2 mm",
                        "Weight(GSM)": "230",
                        "Color": "Black",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF0.2",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "100",
                    "Standard Rate": "150",
                    "Selling Unit": "SQM"
                },
                "DSZGF0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "450",
                        "Color": "Black",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "250",
                    "Standard Rate": "300",
                    "Selling Unit": "SQM"
                },
                "DSZGF0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "490",
                        "Color": "Black",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF0.6",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "270",
                    "Standard Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZGF0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "860",
                        "Color": "Black",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "300",
                    "Standard Rate": "400",
                    "Selling Unit": "SQM"
                },
                "DSZGF1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Weight(GSM)": "920",
                        "Color": "Black",
                        "Temperature Range": "800 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF1.0",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "320",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZGF1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "1000",
                        "Color": "Black",
                        "Temperature Range": "800 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF1.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "300",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZGF2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "1400",
                        "Color": "Black",
                        "Temperature Range": "800 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF2.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "350",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZGF2.5": {
                    "data": {
                        "Thickness": "2.5 mm",
                        "Weight(GSM)": "1500",
                        "Color": "Black",
                        "Temperature Range": "800 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF2.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "400",
                    "Standard Rate": "500",
                    "Selling Unit": "SQM"
                },
                "DSZGF3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1900",
                        "Color": "Black",
                        "Temperature Range": "800 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZGF3.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "550",
                    "Standard Rate": "650",
                    "Selling Unit": "SQM"
                }

            }

        },
        "Signature Silicon coated Fiberglass Fabric": {
            "products": {
                "DSZSFG0.3": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "340",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG0.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "300",
                    "Standard Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Weight(GSM)": "460",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG0.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "350",
                    "Standard Rate": "400",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "510",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "560",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG0.6",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "900",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "450",
                    "Standard Rate": "600",
                    "Selling Unit": "SQM"
                },
                "DSZSFG1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Weight(GSM)": "970",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG1.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "530",
                    "Standard Rate": "650",
                    "Selling Unit": "SQM"
                },
                "DSZSFG1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Weight(GSM)": "1200",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG1.2",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "650",
                    "Standard Rate": "800",
                    "Selling Unit": "SQM"
                },
                "DSZSFG1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "1600",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"

                    },
                    "ModleNo": "DSZSFG1.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1080",
                    "Standard Rate": "1300",
                    "Selling Unit": "SQM"
                },
                "DSZSFG2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "2200",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG2.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1450",
                    "Standard Rate": "1500",
                    "Selling Unit": "SQM"
                },
                "DSZSFG2.5": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG2.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSFG2.8": {
                    "data": {
                        "Thickness": "2.8 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG2.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSFG3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFG3.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG0.3": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "310",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG0.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "280",
                    "Standard Rate": "330",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Weight(GSM)": "400",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG0.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "380",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "450",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "350",
                    "Standard Rate": "430",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "510",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG0.6",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "350",
                    "Standard Rate": "480",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "880",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "430",
                    "Standard Rate": "580",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Weight(GSM)": "900",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG1.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "510",
                    "Standard Rate": "530",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Weight(GSM)": "1050",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG1.2",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "630",
                    "Standard Rate": "780",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "1400",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG1.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1060",
                    "Standard Rate": "1280",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "1900",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG2.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1450",
                    "Standard Rate": "1480",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG2.5": {
                    "data": {
                        "Thickness": "2.5 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"

                    },
                    "ModleNo": "DSZSSFG2.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG2.8": {
                    "data": {
                        "Thickness": "2.8 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG2.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSSFG3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "Customized",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFG3.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.3AD": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "370",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C"
                    },
                    "ModleNo": "DSZSFG0.3AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "550",
                    "Standard Rate": "750",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.5AD": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "540",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C"
                    },
                    "ModleNo": "DSZSFG0.5AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "550",
                    "Standard Rate": "750",
                    "Selling Unit": "SQM"
                },
                "DSZSFG0.8AD": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "960",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C"
                    },
                    "ModleNo": "DSZSFG0.8AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "680",
                    "Standard Rate": "900",
                    "Selling Unit": "SQM"
                }
            }

        },
        "Signature Asbestos Fabric": {
            "products": {
                "DSZASBF1.5C": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "500",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBF1.5C",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "125",
                    "Standard Rate": "150",
                    "Selling Unit": "KG"
                },
                "DSZASBF2.0C": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "600",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBF2.0C",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "125",
                    "Standard Rate": "150",
                    "Selling Unit": "KG"
                },
                "DSZASBF3.0C": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1100",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBF3.0C",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "125",
                    "Standard Rate": "150",
                    "Selling Unit": "KG"
                },
                "DSZASBF5.0C": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Weight(GSM)": "1250",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBF5.0C",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "125",
                    "Standard Rate": "150",
                    "Selling Unit": "KG"
                },
                "DSZASBF1.5S": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "800",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBF1.5S",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "KG"
                },
                "DSZASBF2.0S": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "1000",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBF2.0S",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "KG"
                },
                "DSZASBF3.0S": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1500",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBF3.0S",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "KG"
                },
                "DSZASBF5.0S": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "2200",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBF5.0S",
                    "HSN Code": "5402",
                    "Width": "1 Meter",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "KG"
                }
            }
        },
        "Signature Aluminium Coated Fiberglass Fabric": {
            "products": {
                "DSZALFG0.18": {
                    "data": {
                        "Thickness": "0.18 mm",
                        "Weight(GSM)": "140",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Pure Aluminium"
                    },
                    "ModleNo": "DSZALFG0.18",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "150",
                    "Standard Rate": "200",
                    "Selling Unit": "SQM"
                },
                "DSZALFG0.3": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "210",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Pure Aluminium"
                    },
                    "ModleNo": "DSZALFG0.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "200",
                    "Standard Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZALFG0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "470",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Pure Aluminium"
                    },
                    "ModleNo": "DSZALFG0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZSALFG0.18": {
                    "data": {
                        "Thickness": "0.18 mm",
                        "Weight(GSM)": "140",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Silver Aluminium"
                    },
                    "ModleNo": "DSZSALFG0.18",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "150",
                    "Standard Rate": "200",
                    "Selling Unit": "SQM"
                },
                "DSZSALFG0.3": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "210",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Silver Aluminium"
                    },
                    "ModleNo": "DSZSALFG0.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "200",
                    "Standard Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZSALFG0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "470",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Silver Aluminium"
                    },
                    "ModleNo": "DSZSALFG0.5",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZALFG0.18AD": {
                    "data": {
                        "Thickness": "0.18 mm",
                        "Weight(GSM)": "190",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Aluminium with Adhesive"

                    },
                    "ModleNo": "DSZALFG0.18AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "350",
                    "Selling Unit": "SQM"
                },
                "DSZALFG0.3AD": {
                    "data": {
                        "Thickness": "0.3 mm",
                        "Weight(GSM)": "260",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Aluminium with Adhesive"
                    },
                    "ModleNo": "DSZALFG0.3AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "600",
                    "Standard Rate": "800",
                    "Selling Unit": "SQM"
                },
                "DSZALFG0.5AD": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Weight(GSM)": "530",
                        "Color": "Silver",
                        "Temperature Range": "550 C",
                        "Melting Point": "900C",
                        "Coating": "Aluminium with Adhesive"
                    },
                    "ModleNo": "DSZALFG0.5AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "700",
                    "Standard Rate": "900",
                    "Selling Unit": "SQM"
                }
            }

        },
        "Signature Ceramic Fiber Fabric ": {
            "products": {
                "DSZCF1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Weight(GSM)": "800",
                        "Color": "White",
                        "Temperature Range": "1000 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZCF1.5",
                    "HSN Code": "69039090",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "340",
                    "Standard Rate": "400",
                    "Selling Unit": "SQM"
                },
                "DSZCF2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Weight(GSM)": "950",
                        "Color": "White",
                        "Temperature Range": "1000 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZCF2.0",
                    "HSN Code": "69039090",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "370",
                    "Standard Rate": "420",
                    "Selling Unit": "SQM"
                },
                "DSZCF3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1000",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZCF3.0",
                    "HSN Code": "69039090",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "420",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZCF3.0P": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1500",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZCF3.0P",
                    "HSN Code": "69039090",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "550",
                    "Standard Rate": "600",
                    "Selling Unit": "SQM"
                },
                "DSZCF3.0NM": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1000",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZCF3.0NM",
                    "HSN Code": "69039090",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "420",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Vermiculite Coated Ceramic Fabric": {
            "products": {
                "DSZVCF2.8": {
                    "data": {
                        "Thickness": "2.8 mm",
                        "Weight(GSM)": "1100",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZVCF2.8",
                    "HSN Code": "68062000",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "425",
                    "Standard Rate": "480",
                    "Selling Unit": "SQM"
                },
                "DSZVCF3.2": {
                    "data": {
                        "Thickness": "3.2 mm",
                        "Weight(GSM)": "1500",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZVCF3.2",
                    "HSN Code": "68062000",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "480",
                    "Standard Rate": "550",
                    "Selling Unit": "SQM"
                },
                "DSZVCF4.0": {
                    "data": {
                        "Thickness": "4.0 mm",
                        "Weight(GSM)": "1700",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZVCF4.0",
                    "HSN Code": "68062000",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "520",
                    "Standard Rate": "600",
                    "Selling Unit": "SQM"
                },
                "DSZVCF5.0": {
                    "data": {
                        "Thickness": "4.0 mm",
                        "Weight(GSM)": "2200",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760C"
                    },
                    "ModleNo": "DSZVCF5.0",
                    "HSN Code": "68062000",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "700",
                    "Standard Rate": "750",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Vermiculite Coated Fiberglass Fabric": {
            "products": {
                "DSZVFG2.4": {
                    "data": {
                        "Thickness": "2.4 mm",
                        "Weight(GSM)": "1300",
                        "Color": "Brown",
                        "Temperature Range": "800 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZVFG2.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "400",
                    "Selling Unit": "SQM"
                },
                "DSZVFG2.8": {
                    "data": {
                        "Thickness": "2.8 mm",
                        "Weight(GSM)": "1400",
                        "Color": "Brown",
                        "Temperature Range": "800 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZVFG2.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "400",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZVFG3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "2100",
                        "Color": "Brown",
                        "Temperature Range": "800 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZVFG3.0",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "30 Meter",
                    "Min Rate": "600",
                    "Standard Rate": "700",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature High Silica Fabric": {
            "products": {
                "DSZHS80.0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "600",
                        "Color": "Light Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHS80.0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZHS96.0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "680",
                        "Color": "Light Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHS96.0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "800",
                    "Standard Rate": "900",
                    "Selling Unit": "SQM"
                },
                "DSZHS96.1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Weight(GSM)": "1100",
                        "Color": "Light Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHS96.1.2",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1200",
                    "Standard Rate": "1300",
                    "Selling Unit": "SQM"
                },
                "DSZHS96.1.3": {
                    "data": {
                        "Thickness": "1.3 mm",
                        "Weight(GSM)": "1200",
                        "Color": "Light Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHS96.1.3",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1450",
                    "Standard Rate": "1700",
                    "Selling Unit": "SQM"
                },
                "DSZHS96.1.4": {
                    "data": {
                        "Thickness": "1.4 mm",
                        "Weight(GSM)": "1250",
                        "Color": "Light Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHS96.1.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1450",
                    "Standard Rate": "1700",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Silicon Coated Silica Fabric": {
            "products": {
                "DSZSHS96.0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Weight(GSM)": "850",
                        "Color": "Grey",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSHS96.0.8",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "1150",
                    "Standard Rate": "1200",
                    "Selling Unit": "SQM"
                },
                "DSZSHS96.1.4": {
                    "data": {
                        "Thickness": "1.4 mm",
                        "Weight(GSM)": "1250",
                        "Color": "Grey",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C",
                        "Coating": "Both Side"

                    },
                    "ModleNo": "DSZSHS96.1.4",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "2100",
                    "Standard Rate": "2200",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature PTFE Coated Fiberglass Fabric": {
            "products": {
                "DSZTF0.18": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "260",
                        "Color": "Milky White / Brown",
                        "Temperature Range": "250 C",
                        "Melting Point": "550 C"
                    },
                    "ModleNo": "DSZTF0.18",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Minrate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZTF0.25": {
                    "data": {
                        "Thickness": "7 MIL",
                        "Weight(GSM)": "290",
                        "Color": "Milky White / Brown",
                        "Temperature Range": "250 C",
                        "Melting Point": "550 C"
                    },
                    "ModleNo": "DSZTF0.25",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Selling Unit": "SQM"
                },
                "DSZTF0.30": {
                    "data": {
                        "Thickness": "10 MIL",
                        "Weight(GSM)": "290",
                        "Color": "Milky White / Brown",
                        "Temperature Range": "250 C",
                        "Melting Point": "550 C"
                    },
                    "ModleNo": "DSZTF0.30",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "750",
                    "Standard Rate": "850",
                    "Selling Unit": "SQM"
                },
                "DSZTF0.18AD": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "260 + Adhesive + Wrapper",
                        "Color": "Milky White / Brown",
                        "Temperature Range": "250 C",
                        "Melting Point": "550 C",
                        "Coating": "Adhesive"
                    },
                    "ModleNo": "DSZTF0.18AD",
                    "HSN Code": "70191900",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "Min Rate": "950",
                    "Standard Rate": "1150",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Aluminum Fire Suit": {
            "products": {
                "DSZAL.2LS": {
                    "data": {
                        "Thickness": "2 Layer",
                        "Weight(GSM)": "6 Kg",
                        "Color": "Silver",
                        "Temperature Range": "600 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZAL.2LS",
                    "HSN Code": "62104090",
                    "Width": "Free Size",
                    "Min Rate": "8000",
                    "Standard Rate": "9000",
                    "Selling Unit": "PIS"
                },
                "DSZAL.3LS": {
                    "data": {
                        "Thickness": "3 Layer",
                        "Weight(GSM)": "8 Kg",
                        "Color": "Silver",
                        "Temperature Range": "600 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZAL.3LS",
                    "HSN Code": "62104090",
                    "Width": "Free Size",
                    "Min Rate": "12000",
                    "Standard Rate": "13000",
                    "Selling Unit": "PIS"
                },
                "DSZAL.4LS": {
                    "data": {
                        "Thickness": "4 Layer",
                        "Weight(GSM)": "9 Kg",
                        "Color": "Silver",
                        "Temperature Range": "800 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZAL.4LS",
                    "HSN Code": "62104090",
                    "Width": "Free Size",
                    "Min Rate": "13500",
                    "Standard Rate": "15000",
                    "Selling Unit": "PIS"
                },
                "DSZAL.5LS": {
                    "data": {
                        "Thickness": "5 Layer",
                        "Weight(GSM)": "10 Kg",
                        "Color": "Silver",
                        "Temperature Range": "800 C",
                        "Melting Point": "1000 C"
                    },
                    "ModleNo": "DSZAL.5LS",
                    "HSN Code": "62104090",
                    "Width": "Free Size",
                    "Min Rate": "16500",
                    "Standard Rate": "17000",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Ceramic Insulation Blanket": {
            "products": {
                "DSZRTCW128.73.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Density": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW128.73.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7300 mm",
                    "Min Rate": "1280",
                    "Standard Rate": "1400",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW96.73.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW96.73.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7300 mm",
                    "Min Rate": "990",
                    "Standard Rate": "1150",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW64.73.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "64 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW64.73.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7300 mm",
                    "Min Rate": "710",
                    "Standard Rate": "850",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW128.76.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW128.76.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "1385",
                    "Standard Rate": "1520",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW96.76.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW96.76.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "1070",
                    "Standard Rate": "1245",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW64.76.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "64 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW64.76.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "770",
                    "Standard Rate": "920",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW128.36.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW128.36.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3650 mm",
                    "Min Rate": "1280",
                    "Standard Rate": "1400",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW96.36.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW96.36.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3650 mm",
                    "Min Rate": "990",
                    "Standard Rate": "1150",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW64.36.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "64 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW64.36.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3650 mm",
                    "Min Rate": "710",
                    "Standard Rate": "850",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW128.38.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW128.38.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3810 mm",
                    "Min Rate": "1385",
                    "Standard Rate": "1520",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW96.38.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW96.38.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3810 mm",
                    "Min Rate": "1070",
                    "Standard Rate": "1245",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW64.38.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "64 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW64.38.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3810 mm",
                    "Min Rate": "770",
                    "Standard Rate": "920",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW128.73.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW128.73.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7300 mm",
                    "Min Rate": "2400",
                    "Standard Rate": "2700",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW128.76.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW128.76.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "2600",
                    "Standard Rate": "2920",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW96.73.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW96.73.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7300 mm",
                    "Min Rate": "2000",
                    "Standard Rate": "2200",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW96.76.25": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW96.76.25",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "2160",
                    "Standard Rate": "2375",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW128.36.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW128.36.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3650 mm",
                    "Min Rate": "2400",
                    "Standard Rate": "2700",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW128.38.50": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW128.38.50",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "3810 mm",
                    "Min Rate": "2600",
                    "Standard Rate": "2920",
                    "Selling Unit": "BOX"
                },
                "DSZRTCW128.76.12": {
                    "data": {
                        "Thickness": "12 mm",
                        "Weight(GSM)": "128 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZRTCW128.76.12",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "76200 mm",
                    "Min Rate": "820",
                    "Standard Rate": "900",
                    "Selling Unit": "BOX"
                },
                "DSZHTCW128.76.12": {
                    "data": {
                        "Thickness": "12 mm",
                        "Weight(GSM)": "96 Kg/m3",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHTCW128.76.12",
                    "HSN Code": "69039090",
                    "Width": "610 mm",
                    "Length": "7620 mm",
                    "Min Rate": "1650",
                    "Standard Rate": "1800",
                    "Selling Unit": "BOX"
                }

            }
        },
        "Signature Ceramic Fiber Board": {
            "products": {
                "DSZCB25 1260C": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "320-380",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCB25",
                    "HSN Code": "69039090",
                    "Width": "500 mm",
                    "Length": "1000 mm",
                    "Min Rate": "750",
                    "Standard Rate": "900",
                    "Selling Unit": "Nos"
                },
                "DSZCB25 1425C": {
                    "data": {
                        "Thickness": "25 mm",
                        "Weight(GSM)": "320-380",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCB25",
                    "HSN Code": "69039090",
                    "Width": "500 mm",
                    "Length": "1000 mm",
                    "Min Rate": "1400",
                    "Standard Rate": "1700",
                    "Selling Unit": "Nos"
                },
                "DSZCB50 1260C": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "320-380",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCB50",
                    "HSN Code": "69039090",
                    "Width": "500 mm",
                    "Length": "1000 mm",
                    "Min Rate": "1500",
                    "Standard Rate": "1800",
                    "Selling Unit": "Nos"
                },
                "DSZCB50 1425": {
                    "data": {
                        "Thickness": "50 mm",
                        "Weight(GSM)": "320-380",
                        "Color": "White",
                        "Temperature Range": "1425 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCB50",
                    "HSN Code": "69039090",
                    "Width": "500 mm",
                    "Length": "1000 mm",
                    "Minrate": "60",
                    "Min Rate": "2600",
                    "Standard Rate": "3000",
                    "Selling Unit": "Nos"
                }
            }
        },
        "Signature Ceramic Fiber Paper": {
            "products": {
                "DSZCP1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP1.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "60 Meter",
                    "Standard Rate": "10248",
                    "Selling Unit": "Roll"
                },
                "DSZCP2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP2.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "50 Meter",
                    "Standard Rate": "14640",
                    "Selling Unit": "Roll"
                },
                "DSZCP3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP3.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "30 Meter",
                    "Standard Rate": "12810",
                    "Selling Unit": "Roll"
                },
                "DSZCP5.0": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP5.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "20 Meter",
                    "Standard Rate": "14640",
                    "Selling Unit": "Roll"
                },
                "DSZCP6.0": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP6.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "15 Meter",
                    "Min Rate": "13750",
                    "Standard Rate": "15000",
                    "Selling Unit": "Roll"
                },
                "DSZCP8.0": {
                    "data": {
                        "Thickness": "8.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP8.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "12 Meter",
                    "Standard Rate": "10248",
                    "Selling Unit": "Roll"
                },
                "DSZCP10.0": {
                    "data": {
                        "Thickness": "10.0 mm",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCP10.0",
                    "HSN Code": "69039090",
                    "Width": "1220 mm",
                    "Length": "10 Meter",
                    "Standard Rate": "12200",
                    "Selling Unit": "Roll"
                }
            }
        },
        "Signature Fiberglass Tape": {
            "products": {
                "DSZFTP3.25": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP3.25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP3.40": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP3.40",
                    "HSN Code": "70191900",
                    "Width": "40 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP3.50": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP3.50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP3.75": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP3.75",
                    "HSN Code": "70191900",
                    "Width": "75 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP3.100": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP3.100",
                    "HSN Code": "70191900",
                    "Width": "100 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5.25 25mm": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5.25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5.40": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5.40",
                    "HSN Code": "70191900",
                    "Width": "40 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5.50": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5.50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5.75": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5.75",
                    "HSN Code": "70191900",
                    "Width": "75 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5.100": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5.100",
                    "HSN Code": "70191900",
                    "Width": "100 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFTP5M25": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "0.200 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5M25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP5M50": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "0.380 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5M50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP5M75": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "0.550 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5M75",
                    "HSN Code": "70191900",
                    "Width": "75 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP5M100": {
                    "data": {
                        "Thickness": "5 MIL",
                        "Weight(GSM)": "0.760 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP5M100",
                    "HSN Code": "70191900",
                    "Width": "100 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP7M25": {
                    "data": {
                        "Thickness": "7 MIL",
                        "Weight(GSM)": "0.250 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP7M25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP7M50": {
                    "data": {
                        "Thickness": "7 MIL",
                        "Weight(GSM)": "0.480 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP7M50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP7M75": {
                    "data": {
                        "Thickness": "7 MIL",
                        "Weight(GSM)": "0.730 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP7M75",
                    "HSN Code": "70191900",
                    "Width": "75 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP7M100": {
                    "data": {
                        "Thickness": "7 MIL",
                        "Weight(GSM)": "1.000 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP7M100",
                    "HSN Code": "70191900",
                    "Width": "100 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP10M25": {
                    "data": {
                        "Thickness": "10 MIL",
                        "Weight(GSM)": "0.360 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP10M25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP10M50": {
                    "data": {
                        "Thickness": "10 MIL",
                        "Weight(GSM)": "0.700 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP10M50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP10M75": {
                    "data": {
                        "Thickness": "10 MIL",
                        "Weight(GSM)": "1.050 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP10M75",
                    "HSN Code": "70191900",
                    "Width": "75 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                },
                "DSZFTP10M100": {
                    "data": {
                        "Thickness": "10 MIL",
                        "Weight(GSM)": "1.500 Kg",
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFTP10M100",
                    "HSN Code": "70191900",
                    "Width": "100 mm",
                    "Length": "50 Meter",
                    "Min Rate": "330",
                    "Standard Rate": "350",
                    "Selling Unit": "kg"
                }

            }
        },
        "Signature Ceramic Fiber Tape": {
            "products": {
                "DSZCTP3.25": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP3.25",
                    "HSN Code": "69039090",
                    "Width": "25 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP3.40": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP3.40",
                    "HSN Code": "69039090",
                    "Width": "40 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP3.50": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP3.50",
                    "HSN Code": "69039090",
                    "Width": "50 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP3.75": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP3.75",
                    "HSN Code": "69039090",
                    "Width": "75 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP3.100": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP3.100",
                    "HSN Code": "69039090",
                    "Width": "100 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP6.25": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP6.25",
                    "HSN Code": "69039090",
                    "Width": "25 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP6.40": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP6.40",
                    "HSN Code": "69039090",
                    "Width": "40 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP6.50": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP6.50",
                    "HSN Code": "69039090",
                    "Width": "50 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP6.75": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP6.75",
                    "HSN Code": "69039090",
                    "Width": "75 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCTP6.100": {
                    "data": {
                        "Thickness": "6.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZCTP6.100",
                    "HSN Code": "69039090",
                    "Width": "100 mm",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                }
            }
        },
        "Signature Fiberglass Rope": {
            "products": {
                "DSZFR.R6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R6",
                    "HSN Code": "70191900",
                    "Width": "6 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R8",
                    "HSN Code": "70191900",
                    "Width": "8 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R10",
                    "HSN Code": "70191900",
                    "Width": "10 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R12",
                    "HSN Code": "70191900",
                    "Width": "12 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R16",
                    "HSN Code": "70191900",
                    "Width": "16 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R19",
                    "HSN Code": "70191900",
                    "Width": "19 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R32",
                    "HSN Code": "70191900",
                    "Width": "32 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R38",
                    "HSN Code": "70191900",
                    "Width": "38 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.R50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZFR.R50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S6",
                    "HSN Code": "70191900",
                    "Width": "6 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S8",
                    "HSN Code": "70191900",
                    "Width": "8 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S10",
                    "HSN Code": "70191900",
                    "Width": "10 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S12",
                    "HSN Code": "70191900",
                    "Width": "12 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S16",
                    "HSN Code": "70191900",
                    "Width": "16 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S19",
                    "HSN Code": "70191900",
                    "Width": "19 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S25",
                    "HSN Code": "70191900",
                    "Width": "25 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S32",
                    "HSN Code": "70191900",
                    "Width": "32 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S38",
                    "HSN Code": "70191900",
                    "Width": "38 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZFR.S50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZFR.S50",
                    "HSN Code": "70191900",
                    "Width": "50 mm",
                    "Min Rate": "240",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                }

            }
        },
        "Signature Ceramic Fiber Rope": {
            "products": {
                "DSZCRP.R6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R6",
                    "HSN Code": "69039090",
                    "Width": "6 mm",
                    "Min Rate": "450",
                    "Standard Rate": "500",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R8",
                    "Width": "8 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R10",
                    "Width": "10 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R12",
                    "Width": "12 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R16",
                    "Width": "16 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R19",
                    "Width": "19 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R25",
                    "Width": "25 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R32",
                    "Width": "32 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R38",
                    "Width": "38 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.R50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZCRP.R50",
                    "Width": "50 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S6",
                    "Width": "6 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S8",
                    "Width": "8 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S10",
                    "Width": "10 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S12",
                    "Width": "12 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S16",
                    "Width": "16 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S19",
                    "Width": "19 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S25",
                    "Width": "25 mm",
                    "Minrate": "60",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S32",
                    "Width": "32 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S38",
                    "Width": "38 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                },
                "DSZCRP.S50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZCRP.S50",
                    "Width": "50 mm",
                    "HSN Code": "69039090",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "kg"
                }
            }
        },
        "Signature Asbestos Rope": {
            "products": {
                "DSZASBCRP6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP6",
                    "Width": "6 mm",
                    "HSN Code": "5205",
                    "Min Rate": "150",
                    "Standard Rate": "200",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP8",
                    "Width": "8 mm",
                    "HSN Code": "5205",
                    "Min Rate": "150",
                    "Standard Rate": "200",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP10",
                    "Width": "10 mm",
                    "HSN Code": "5205",
                    "Min Rate": "150",
                    "Standard Rate": "200",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP12",
                    "Width": "12 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP16",
                    "Width": "16 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP19",
                    "Width": "19 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP25",
                    "Width": "25 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP32",
                    "Width": "32 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP38",
                    "Width": "38 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBCRP50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "150 C",
                        "Shape": "Round"
                    },
                    "ModleNo": "DSZASBCRP50",
                    "Width": "50 mm",
                    "HSN Code": "5205",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP6": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP6",
                    "Width": "6 mm",
                    "HSN Code": "6812",
                    "Min Rate": "340",
                    "Standard Rate": "400",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP8": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP8",
                    "Width": "8 mm",
                    "HSN Code": "6812",
                    "Min Rate": "340",
                    "Standard Rate": "400",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP10": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP10",
                    "Width": "10 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP12": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP12",
                    "Width": "12 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP16": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP16",
                    "Width": "16 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP19": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP19",
                    "Width": "19 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP25": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP25",
                    "Width": "25 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP32": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP32",
                    "Width": "32 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP38": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP38",
                    "Width": "38 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBSRP50": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "250 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZASBSRP50",
                    "Width": "50 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                }
            }
        },
        "Signature Asbestos Tape": {
            "products": {
                "DSZASBTP3C25": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP3C25",
                    "Width": "25 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3C40": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP3C40",
                    "Width": "40 mm",
                    "Minrate": "60",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3C50": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP3C50",
                    "Width": "50 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3C75": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP3C75",
                    "Width": "75 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3C100": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP3C100",
                    "Width": "100 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5C25": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP5C25",
                    "Width": "25 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5C40": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP5C40",
                    "Width": "40 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5C50": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP5C50",
                    "Width": "50 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5C75": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP5C75",
                    "Width": "75 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5C100": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "150 C"
                    },
                    "ModleNo": "DSZASBTP5C100",
                    "Width": "100 mm",
                    "HSN Code": "5402",
                    "Min Rate": "130",
                    "Standard Rate": "170",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3S25": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP3S25",
                    "Width": "25 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3S40": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP3S40",
                    "Width": "40 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3S50": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP3S50",
                    "Width": "50 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3S75": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP3S75",
                    "Width": "75 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP3S100": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP3S100",
                    "Width": "100 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5S25": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP5S25",
                    "Width": "25 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5S40": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP5S40",
                    "Width": "40 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5S50": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP5S50",
                    "Width": "50 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5S75": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP5S75",
                    "Width": "75 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                },
                "DSZASBTP5S100": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Color": "White",
                        "Temperature Range": "250 C"
                    },
                    "ModleNo": "DSZASBTP5S100",
                    "Width": "100 mm",
                    "HSN Code": "6812",
                    "Min Rate": "230",
                    "Standard Rate": "280",
                    "Selling Unit": "kg"
                }

            }
        },
        "Signature Graphite Gland Packing Rope": {
            "products": {
                "DSZGGRP": {
                    "data": {
                        "Color": "Black",
                        "Temperature Range": "(-240 C) to 650 C",
                        "Melting Point": "900 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZGGRP",
                    "Width": "3 mm to 100 mm (Customize)",
                    "HSN Code": "69039090",
                    "Min Rate": "1300",
                    "Standard Rate": "1500",
                    "Selling Unit": "KG"

                }
            }
        },
        "Signature PTFE Gland Packing Rope": {
            "products": {
                "DSZTFGRP": {
                    "data": {
                        "Color": "White",
                        "Temperature Range": "(-200 C) to 280 C",
                        "Melting Point": "350 C",
                        "Shape": "Square"
                    },
                    "ModleNo": "DSZTFGRP",
                    "Width": "3 mm to 100 mm (Customize)",
                    "HSN Code": "3920",
                    "Min Rate": "2400",
                    "Standard Rate": "2700",
                    "Selling Unit": "KG"

                }
            }
        },
        "Signature Fire Blanket": {
            "products": {
                "DSZFB0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB0.4",
                    "HSN Code": "70191900",
                    "Min Rate": "75",
                    "Standard Rate": "130",
                    "Selling Unit": "PIS"
                },
                "DSZFB0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB0.6",
                    "HSN Code": "70191900",
                    "Min Rate": "120",
                    "Standard Rate": "180",
                    "Selling Unit": "PIS"
                },
                "DSZFB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "200",
                    "Standard Rate": "280",
                    "Selling Unit": "PIS"
                },
                "DSZFB1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB1.0",
                    "HSN Code": "70191900",
                    "Min Rate": "230",
                    "Standard Rate": "300",
                    "Selling Unit": "PIS"
                },
                "DSZFB1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB1.2",
                    "HSN Code": "70191900",
                    "Min Rate": "230",
                    "Standard Rate": "350",
                    "Selling Unit": "PIS"
                },
                "DSZFB1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB1.5",
                    "HSN Code": "70191900",
                    "Min Rate": "200",
                    "Standard Rate": "280",
                    "Selling Unit": "PIS"
                },
                "DSZFB2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB2.0",
                    "HSN Code": "70191900",
                    "Min Rate": "250",
                    "Standard Rate": "330",
                    "Selling Unit": "PIS"
                },
                "DSZFB3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFB3.0",
                    "HSN Code": "70191900",
                    "Min Rate": "450",
                    "Standard Rate": "550",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signaure Silicon Fire Blanket": {
            "products": {
                "DSZSFB0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB0.4",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "400",
                    "Selling Unit": "PIS"
                },
                "DSZSFB0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB0.5",
                    "HSN Code": "70191900",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZSFB0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB0.6",
                    "HSN Code": "70191900",
                    "Min Rate": "380",
                    "Standard Rate": "500",
                    "Selling Unit": "PIS"
                },
                "DSZSFB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "450",
                    "Standard Rate": "600",
                    "Selling Unit": "PIS"
                },
                "DSZSFB1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB1.0",
                    "HSN Code": "70191900",
                    "Min Rate": "530",
                    "Standard Rate": "650",
                    "Selling Unit": "PIS"
                },
                "DSZSFB1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB1.2",
                    "HSN Code": "70191900",
                    "Min Rate": "650",
                    "Standard Rate": "800",
                    "Selling Unit": "PIS"
                },
                "DSZSFB1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB1.5",
                    "HSN Code": "70191900",
                    "Min Rate": "1080",
                    "Standard Rate": "1300",
                    "Selling Unit": "PIS"
                },
                "DSZSFB2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZSFB2.0",
                    "HSN Code": "70191900",
                    "Min Rate": "1450",
                    "Standard Rate": "1500",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB0.4": {
                    "data": {
                        "Thickness": "0.4 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB0.4",
                    "HSN Code": "70191900",
                    "Min Rate": "330",
                    "Standard Rate": "380",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB0.5",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "430",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB0.6",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "480",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "430",
                    "Standard Rate": "580",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB1.0",
                    "HSN Code": "70191900",
                    "Min Rate": "510",
                    "Standard Rate": "530",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB1.2",
                    "HSN Code": "70191900",
                    "Min Rate": "630",
                    "Standard Rate": "780",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB1.5",
                    "HSN Code": "70191900",
                    "Min Rate": "1060",
                    "Standard Rate": "1280",
                    "Selling Unit": "PIS"
                },
                "DSZSSFB2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "Grey / Red",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C",
                        "Coating": "Single Side"
                    },
                    "ModleNo": "DSZSSFB2.0",
                    "HSN Code": "70191900",
                    "Min Rate": "1450",
                    "Standard Rate": "1480",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signaure Medium Duty Welding Blanket": {
            "products": {
                "DSZMDWB2.0 Non-Metallic": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "Brown",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side",
                        "Reinforcement": "Non Metallic"
                    },
                    "ModleNo": "DSZMDWB2.0",
                    "HSN Code": "70191900",
                    "Min Rate": "330",
                    "Standard Rate": "400",
                    "Selling Unit": "PIS"
                },
                "DSZMDWB2.4 Non-Metallic": {
                    "data": {
                        "Thickness": "2.4 mm",
                        "Color": "Brown",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side",
                        "Reinforcement": "Non Metallic"
                    },
                    "ModleNo": "DSZMDWB2.4",
                    "HSN Code": "70191900",
                    "Min Rate": "400",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZMDWB3.0 Non-Metallic": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "Brown",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side",
                        "Reinforcement": "Non Metallic"
                    },
                    "ModleNo": "DSZMDWB3.0",
                    "HSN Code": "70191900",
                    "Min Rate": "600",
                    "Standard Rate": "700",
                    "Selling Unit": "PIS"
                },
                "DSZMDWB3.0 SS-Metallic": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Coating": "Non Treated",
                        "Reinforcement": "SS Metallic"
                    },
                    "ModleNo": "DSZMDWB3.0",
                    "HSN Code": "69039090",
                    "Min Rate": "420",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZMDWB2.0 SS-Metallic": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Coating": "Non Treated",
                        "Reinforcement": "SS Metallic"
                    },
                    "ModleNo": "DSZMDWB2.0",
                    "HSN Code": "69039090",
                    "Min Rate": "370",
                    "Standard Rate": "420",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Graphite Fire Blanket": {
            "products": {
                "DSZGFB0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB0.6",
                    "HSN Code": "70191900",
                    "Min Rate": "270",
                    "Standard Rate": "350",
                    "Selling Unit": "PIS"
                },
                "DSZGFB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "300",
                    "Standard Rate": "400",
                    "Selling Unit": "PIS"
                },
                "DSZGFB1.0": {
                    "data": {
                        "Thickness": "1.0 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB1.0",
                    "HSN Code": "70191900",
                    "Min Rate": "320",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZGFB1.2": {
                    "data": {
                        "Thickness": "1.2 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB1.2",
                    "HSN Code": "70191900",
                    "Min Rate": "310",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZGFB1.5": {
                    "data": {
                        "Thickness": "1.5 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB1.5",
                    "HSN Code": "70191900",
                    "Min Rate": "300",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZGFB2.0": {
                    "data": {
                        "Thickness": "2.0 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB2.0",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZGFB2.5": {
                    "data": {
                        "Thickness": "2.5 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB2.5",
                    "HSN Code": "70191900",
                    "Min Rate": "400",
                    "Standard Rate": "500",
                    "Selling Unit": "PIS"
                },
                "DSZGFB3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "Black",
                        "Temperature Range": "900 C",
                        "Melting Point": "1000 C",
                        "Coating": "Both Side"
                    },
                    "ModleNo": "DSZGFB3.0",
                    "HSN Code": "70191900",
                    "Min Rate": "550",
                    "Standard Rate": "650",
                    "Selling Unit": "PIS"
                }

            }
        },
        "Signature Welding Blanket": {
            "products": {
                "DSZVCFWB3.2": {
                    "data": {
                        "Thickness": "3.2 mm",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Coating": "Both Side",
                        "Reinforcement": "SS Metallic"
                    },
                    "ModleNo": "DSZVCFWB3.2",
                    "HSN Code": "68062000",
                    "Min Rate": "490",
                    "Standard Rate": "550",
                    "Selling Unit": "PIS"
                },
                "DSZVCFWB2.8": {
                    "data": {
                        "Thickness": "2.8 mm",
                        "Color": "Brown",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C",
                        "Coating": "Both Side",
                        "Reinforcement": "SS Metallic"
                    },
                    "ModleNo": "DSZVCFWB2.8",
                    "HSN Code": "68062000",
                    "Min Rate": "460",
                    "Standard Rate": "480",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Non Asbestos Blanket": {
            "products": {
                "DSZHSWB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Ligth Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHSWB0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "800",
                    "Standard Rate": "900",
                    "Selling Unit": "PIS"
                },
                "DSZHSWB1.3": {
                    "data": {
                        "Thickness": "1.3 mm",
                        "Color": "Ligth Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHSWB1.3",
                    "HSN Code": "70191900",
                    "Min Rate": "1450",
                    "Standard Rate": "1700",
                    "Selling Unit": "PIS"
                },
                "DSZHSWB1.4": {
                    "data": {
                        "Thickness": "1.4 mm",
                        "Color": "Ligth Golden",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZHSWB1.4",
                    "HSN Code": "70191900",
                    "Min Rate": "1450",
                    "Standard Rate": "1700",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Car Fire Blanket": {
            "products": {
                "DSZCFB0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Grey",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZCFB0.8",
                    "Width": "6 Meter",
                    "Length": "9 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "420",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZCFB0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Grey",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZCFB0.6",
                    "Width": "6 Meter",
                    "Length": "9 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "1150",
                    "Standard Rate": "1200",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Fire Retardant Tarpuline": {
            "products": {
                "DSZTRP0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Color": "Grey",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZTRP0.5",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature FIre Retardant Canvas Fabric": {
            "products": {
                "DSZFRC0.5": {
                    "data": {
                        "Thickness": "0.5 mm",
                        "Color": "Grey",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZTRP0.5",
                    "Length": "50 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "350",
                    "Standard Rate": "450",
                    "Selling Unit": "PIS"
                },
                "DSZFRC0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Grey",
                        "Temperature Range": "550 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZTRP0.6",
                    "Length": "50 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "420",
                    "Standard Rate": "480",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Heat Insulation Fabric": {
            "products": {
                "DSZHIT0.6FG": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "430",
                        "Color": "White",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZHIT0.6FG",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "130",
                    "Standard Rate": "180",
                    "Selling Unit": "SQM"
                },
                "DSZHIT0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Weight(GSM)": "520",
                        "Color": "Grey",
                        "Temperature Range": "600 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZHIT0.6",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "380",
                    "Standard Rate": "450",
                    "Selling Unit": "SQM"
                },
                "DSZHIT3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Weight(GSM)": "1000",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZHIT3.0",
                    "Width": "1 Meter",
                    "Length": "50 Meter",
                    "HSN Code": "70191900",
                    "Min Rate": "420",
                    "Standard Rate": "480",
                    "Selling Unit": "SQM"
                }
            }

        },
        "Signature Fire Curtain": {
            "products": {
                "DSZFCRT0.6": {
                    "data": {
                        "Thickness": "0.6 mm",
                        "Color": "Grey",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFCRT0.6",
                    "HSN Code": "70191900",
                    "Min Rate": "420",
                    "Standard Rate": "480",
                    "Selling Unit": "PIS"
                },
                "DSZFCRT0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Grey",
                        "Temperature Range": "650 C",
                        "Melting Point": "900 C"
                    },
                    "ModleNo": "DSZFCRT0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "550",
                    "Standard Rate": "650",
                    "Selling Unit": "PIS"
                }

            }
        },
        "Signature Welding Curtain": {
            "products": {
                "DSZWCRT0.8": {
                    "data": {
                        "Thickness": "0.8 mm",
                        "Color": "Grey",
                        "Temperature Range": "1100 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZWCRT0.8",
                    "HSN Code": "70191900",
                    "Min Rate": "1150",
                    "Standard Rate": "1200",
                    "Selling Unit": "PIS"
                },
                "DSZWCRT3.0": {
                    "data": {
                        "Thickness": "3.0 mm",
                        "Color": "White",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1760 C"
                    },
                    "ModleNo": "DSZWCRT3.0",
                    "HSN Code": "69039090",
                    "Min Rate": "420",
                    "Standard Rate": "480",
                    "Selling Unit": "PIS"
                }
            }
        },
        "Signature Carbonshield Blanket": {
            "products": {
                "DSZCRB5.0": {
                    "data": {
                        "Thickness": "5.0 mm",
                        "Width": "600",
                        "Color": "Black",
                        "Temperature Range": "1260 C",
                        "Melting Point": "1800 C"
                    },
                    "ModleNo": "DSZCRB5.0",
                    "HSN Code": "5911",
                    "Min Rate": "1100",
                    "Standard Rate": "1500",
                    "Selling Unit": "SQM"
                }
            }
        },
        "Signature Insulation Pad": {
            "products": {
                "DSZIP.C": {
                    "ModleNo": "DSZIP.C",
                    "Selling Unit": "SQM"
                }
            }
        }


    }
]

module.exports = {products, productDetails}


// [
//     {

//         "Signature Fiberglass Fabric": {
//             "products": {
//                 "DSZFG0.18 100GSM 1X400 Meter": {
//                     "ModleNo": "DSZFG0.18",
//                     "Thickness": "0.18 mm",
//                     "Weight(GSM)": "100",
//                     "Width": "1 Meter",
//                     "Length": "400 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "NA"
//                 },
//                 "DSZFG0.2 200GSM 1X400 Meter": {
//                     "ModleNo": "DSZFG0.2",
//                     "Thickness": "0.2 mm",
//                     "Weight(GSM)": "200",
//                     "Width": "1 Meter",
//                     "Length": "400 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "NA"
//                 },
//                 "DSZFG0.3 200GSM 1X100 Meter": {
//                     "ModleNo": "DSZFG0.3",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "200",
//                     "Width": "1 Meter",
//                     "Length": "100 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "NA"
//                 },
//                 "DSZFG0.4 280GSM 1X100 Meter": {
//                     "ModleNo": "DSZFG0.4",
//                     "Thickness": "0.4 mm",
//                     "Weight(GSM)": "280",
//                     "Width": "1 Meter",
//                     "Length": "100 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "NA"
//                 },
//                 "DSZFG0.5 420GSM 1X100 Meter": {
//                     "ModleNo": "DSZFG0.5",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "420",
//                     "Width": "1 Meter",
//                     "Length": "100 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "NA"
//                 },
//                 "DSZFG0.6 430GSM 1X100 Meter": {
//                     "ModleNo": "DSZFG0.6",
//                     "Thickness": "0.6 mm",
//                     "Weight(GSM)": "430",
//                     "Width": "1 Meter",
//                     "Length": "100 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG1.0 840GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG1.0",
//                     "Thickness": "1.0 mm",
//                     "Weight(GSM)": "840",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG1.2 900GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG1.2",
//                     "Thickness": "1.2 mm",
//                     "Weight(GSM)": "900",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG1.5 950GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG1.5",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "950",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG2.0 1050GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "1050",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG2.5 1300GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG2.5",
//                     "Thickness": "2.5 mm",
//                     "Weight(GSM)": "1300",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFG3.0 1850GSM 1X50 Meter": {
//                     "ModleNo": "DSZFG3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1850",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Graphite Coated Fiberglass Fabric": {
//             "products": {
//                 "DSZGF0.2 230GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF0.2",
//                     "Thickness": "0.2 mm",
//                     "Weight(GSM)": "230",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF0.5 450GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF0.5",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "450",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF0.6 490GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF0.6",
//                     "Thickness": "0.6 mm",
//                     "Weight(GSM)": "490",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF0.8 860GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "860",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF1.0 920GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF1.0",
//                     "Thickness": "1.0 mm",
//                     "Weight(GSM)": "920",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF1.5 1000GSM 1X50 Meter": {
//                     "ModleNo": "DSZGF1.5",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "1000",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF2.0 1400GSM 1X30 Meter": {
//                     "ModleNo": "DSZGF2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "1400",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF2.5 1500GSM 1X30 Meter": {
//                     "ModleNo": "DSZGF2.5",
//                     "Thickness": "2.5 mm",
//                     "Weight(GSM)": "1500",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZGF3.0 1900GSM 1X30 Meter": {
//                     "ModleNo": "DSZGF3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1900",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 }

//             }

//         },
//         "Signature Silicon coated Fiberglass Fabric": {
//             "products": {
//                 "DSZSFG0.3 340GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.3",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "340",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG0.4 460GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.4",
//                     "Thickness": "0.4 mm",
//                     "Weight(GSM)": "460",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG0.5 510GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.5",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "510",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG0.6 560GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.6",
//                     "Thickness": "0.6 mm",
//                     "Weight(GSM)": "560",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG0.8 900GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "900",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG1.0 970GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG1.0",
//                     "Thickness": "1.0 mm",
//                     "Weight(GSM)": "970",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG1.2 1200GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG1.2",
//                     "Thickness": "1.2 mm",
//                     "Weight(GSM)": "1200",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG1.5 1600GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG1.5",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "1600",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG2.0 2200GSM 1X50 Meter": {
//                     "ModleNo": "DSZSFG2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "2200",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG2.5 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSFG2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG2.8 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSFG2.8",
//                     "Thickness": "2.8 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFG3.0 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSFG3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSSFG0.3 310 1X50 Meter": {
//                     "ModleNo": "DSZSSFG0.3",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "310",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG0.4 400 1X50 Meter": {
//                     "ModleNo": "DSZSSFG0.4",
//                     "Thickness": "0.4 mm",
//                     "Weight(GSM)": "400",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG0.5 450 1X50 Meter": {
//                     "ModleNo": "DSZSSFG0.5",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "450",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG0.6 510 1X50 Meter": {
//                     "ModleNo": "DSZSSFG0.6",
//                     "Thickness": "0.6 mm",
//                     "Weight(GSM)": "510",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG0.8 880 1X50 Meter": {
//                     "ModleNo": "DSZSSFG0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "880",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG1.0 900 1X50 Meter": {
//                     "ModleNo": "DSZSSFG1.0",
//                     "Thickness": "1.0 mm",
//                     "Weight(GSM)": "900",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG1.2 1050 1X50 Meter": {
//                     "ModleNo": "DSZSSFG1.2",
//                     "Thickness": "1.2 mm",
//                     "Weight(GSM)": "1050",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG1.5 1400 1X50 Meter": {
//                     "ModleNo": "DSZSSFG1.5",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "1400",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG2.0 1900 1X50 Meter": {
//                     "ModleNo": "DSZSSFG2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "1900",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG2.5 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSSFG2.5",
//                     "Thickness": "2.5 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG2.8 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSSFG2.8",
//                     "Thickness": "2.8 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFG3.0 Customized 1X50 Meter": {
//                     "ModleNo": "DSZSSFG3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "Customized",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSFG0.3AD 370 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.3AD",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "370",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZSFG0.5AD 540 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.5AD",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "540",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZSFG0.8AD 960 1X50 Meter": {
//                     "ModleNo": "DSZSFG0.8AD",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "960",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 }
//             }

//         },
//         "Signature Asbestos Fabric": {
//             "products": {
//                 "DSZASBF1.5C 500 1 Meter": {
//                     "ModleNo": "DSZASBF1.5C",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "500",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF2.0C 600 1 Meter": {
//                     "ModleNo": "DSZASBF2.0C",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "600",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF3.0C 1100 1 Meter": {
//                     "ModleNo": "DSZASBF3.0C",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1100",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF5.0C 1250 1 Meter": {
//                     "ModleNo": "DSZASBF5.0C",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "1250",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF1.5S 800 1 Meter": {
//                     "ModleNo": "DSZASBF1.5S",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "800",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF2.0S 1000 1 Meter": {
//                     "ModleNo": "DSZASBF2.0S",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "1000",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF3.0S 1500 1 Meter": {
//                     "ModleNo": "DSZASBF3.0S",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1500",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 },
//                 "DSZASBF5.0S 2200 1 Meter": {
//                     "ModleNo": "DSZASBF5.0S",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "2200",
//                     "Width": "1 Meter",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Aluminium Coated Fiberglass Fabric": {
//             "products": {
//                 "DSZALFG0.18 140 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.18",
//                     "Thickness": "0.18 mm",
//                     "Weight(GSM)": "140",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZALFG0.3 210 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.3",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "210",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZALFG0.5 470 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.5",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "470",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZALFG0.18AD 190 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.18AD",
//                     "Thickness": "0.18 mm",
//                     "Weight(GSM)": "190",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZALFG0.3AD 260 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.3AD",
//                     "Thickness": "0.3 mm",
//                     "Weight(GSM)": "260",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 },
//                 "DSZALFG0.5AD 530 1X50 Meter": {
//                     "ModleNo": "DSZALFG0.5AD",
//                     "Thickness": "0.5 mm",
//                     "Weight(GSM)": "530",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900C",
//                     "Coating": ""
//                 }
//             }

//         },
//         "Signature Ceramic Fiber Fabric ": {
//             "products": {
//                 "DSZCF1.5 800 1X30 Meter": {
//                     "ModleNo": "DSZCF1.5",
//                     "Thickness": "1.5 mm",
//                     "Weight(GSM)": "800",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1000 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZCF2.0 950 1X30 Meter": {
//                     "ModleNo": "DSZCF2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "950",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1000 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZCF3.0 1000 1X30 Meter": {
//                     "ModleNo": "DSZCF3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1000",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZCF3.0P 1500 1X30 Meter": {
//                     "ModleNo": "DSZCF3.0P",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1500",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZCF3.0NM 1000 1X30 Meter": {
//                     "ModleNo": "DSZCF3.0NM",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "1000",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Vermiculite Coated Ceramic Fabric": {
//             "products": {
//                 "DSZVCF2.8 1100 1X30 Meter": {
//                     "ModleNo": "DSZVCF2.8",
//                     "Thickness": "2.8 mm",
//                     "Weight(GSM)": "1100",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZVCF3.2 1500 1X30 Meter": {
//                     "ModleNo": "DSZVCF3.2",
//                     "Thickness": "3.2 mm",
//                     "Weight(GSM)": "1500",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZVCF4.0 1700 1X30 Meter": {
//                     "ModleNo": "DSZVCF4.0",
//                     "Thickness": "4.0 mm",
//                     "Weight(GSM)": "1700",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 },
//                 "DSZVCF5.0 2200 1X30 Meter": {
//                     "ModleNo": "DSZVCF5.0",
//                     "Thickness": "4.0 mm",
//                     "Weight(GSM)": "2200",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Vermiculite Coated Fiberglass Fabric": {
//             "products": {
//                 "DSZVFG2.4 1300 1X50 Meter": {
//                     "ModleNo": "DSZVFG2.4",
//                     "Thickness": "2.4 mm",
//                     "Weight(GSM)": "1300",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 },
//                 "DSZVFG2.8 1400 1X30 Meter": {
//                     "ModleNo": "DSZVFG2.8",
//                     "Thickness": "2.8 mm",
//                     "Weight(GSM)": "1400",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 },
//                 "DSZVFG3.0 2100 1X30 Meter": {
//                     "ModleNo": "DSZVFG3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "2100",
//                     "Width": "1 Meter",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature High Silica Fabric": {
//             "products": {
//                 "DSZHS80.0.8 600 1X50 Meter": {
//                     "ModleNo": "DSZHS80.0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "600",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Light Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 },
//                 "DSZHS96.0.8 680 1X50 Meter": {
//                     "ModleNo": "DSZHS96.0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "680",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Light Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 },
//                 "DSZHS96.1.2 1100 1X50 Meter": {
//                     "ModleNo": "DSZHS96.1.2",
//                     "Thickness": "1.2 mm",
//                     "Weight(GSM)": "1100",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Light Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 },
//                 "DSZHS96.1.3 1200 1X50 Meter": {
//                     "ModleNo": "DSZHS96.1.3",
//                     "Thickness": "1.3 mm",
//                     "Weight(GSM)": "1200",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Light Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 },
//                 "DSZHS96.1.4 1250 1X50 Meter": {
//                     "ModleNo": "DSZHS96.1.4",
//                     "Thickness": "1.4 mm",
//                     "Weight(GSM)": "1250",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Light Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Silicon Coated Silica Fabric": {
//             "products": {
//                 "DSZSHS96.0.8 850 1X50 Meter": {
//                     "ModleNo": "DSZSHS96.0.8",
//                     "Thickness": "0.8 mm",
//                     "Weight(GSM)": "850",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 },
//                 "DSZSHS96.1.4 1250 1X50 Meter": {
//                     "ModleNo": "DSZSHS96.1.4",
//                     "Thickness": "1.4 mm",
//                     "Weight(GSM)": "1250",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature PTFE Coated Fiberglass Fabric": {
//             "products": {
//                 "DSZTF0.18 260 1X50 Meter": {
//                     "ModleNo": "DSZTF0.18",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "260",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 },
//                 "DSZTF0.25 290 1X50 Meter": {
//                     "ModleNo": "DSZTF0.25",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "290",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 },
//                 "DSZTF0.30 450 1X50 Meter": {
//                     "ModleNo": "DSZTF0.30",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "290",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 },
//                 "DSZTF0.18AD 260 + Adhesive + Wrapper 1X50 Meter": {
//                     "ModleNo": "DSZTF0.18AD",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "260 + Adhesive + Wrapper",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 },
//                 "DSZTF0.25AD 290 + Adhesive + Wrapper 1X50 Meter": {
//                     "ModleNo": "DSZTF0.25AD",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "290 + Adhesive + Wrapper",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 },
//                 "DSZTF0.30AD 450 + Adhesive + Wrapper 1X50 Meter": {
//                     "ModleNo": "DSZTF0.30AD",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "450 + Adhesive + Wrapper",
//                     "Width": "1 Meter",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "Milky White / Brown",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "550 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Aluminum Fire Suit": {
//             "products": {
//                 "DSZAL.2LS 6Kg": {
//                     "ModleNo": "DSZAL.2LS",
//                     "Thickness": "2 Layer",
//                     "Weight(GSM)": "6 Kg",
//                     "Width": "",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 },
//                 "DSZAL.3LS 8Kg": {
//                     "ModleNo": "DSZAL.3LS",
//                     "Thickness": "3 Layer",
//                     "Weight(GSM)": "8 Kg",
//                     "Width": "",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 },
//                 "DSZAL.4LS 9Kg": {
//                     "ModleNo": "DSZAL.4LS",
//                     "Thickness": "4 Layer",
//                     "Weight(GSM)": "9 Kg",
//                     "Width": "",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 },
//                 "DSZAL.5LS 10Kg": {
//                     "ModleNo": "DSZAL.5LS",
//                     "Thickness": "5 Layer",
//                     "Weight(GSM)": "10 Kg",
//                     "Width": "",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "Silver",
//                     "Temperature Range": "800 C",
//                     "Melting Point": "1000 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Ceramic Insulation Blanket": {
//             "products": {
//                 "DSZCW25 128Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 96Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "96 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 64Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "64 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 128Kg/m3 610X7620mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7620 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 96Kg/m3 610X7620mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "96 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7620 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 64Kg/m3 610X7620mm 1260C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "64 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7620 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 128Kg/m3 610X3650mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3650 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 96Kg/m3 610X3650mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "96 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3650 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 64Kg/m3 610X3650mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "64 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3650 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 128Kg/m3 610X3810mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3810 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 96Kg/m3 610X3810mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "96 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3810 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 64Kg/m3 610X3810mm 1260C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "64 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3810 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 128Kg/m3 610X7300mm 1425C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW25 128Kg/m3 610X7620mm 1425C": {
//                     "ModleNo": "DSZCW25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7620 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 128Kg/m3 610X3650mm 1425C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3650 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW50 128Kg/m3 610X3810mm 1425C": {
//                     "ModleNo": "DSZCW50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "3810 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW12 128Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW12",
//                     "Thickness": "12 mm",
//                     "Weight(GSM)": "128 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW12 96Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW12",
//                     "Thickness": "12 mm",
//                     "Weight(GSM)": "96 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCW12 64Kg/m3 610X7300mm 1260C": {
//                     "ModleNo": "DSZCW12",
//                     "Thickness": "12 mm",
//                     "Weight(GSM)": "64 Kg/m3",
//                     "Width": "610 mm",
//                     "Length": "7300 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 }

//             }
//         },
//         "Signature Ceramic Fiber Board": {
//             "products": {
//                 "DSZCB12 300-370 500X1000mm 1260C": {
//                     "ModleNo": "DSZCB12",
//                     "Thickness": "12 mm",
//                     "Weight(GSM)": "300-370",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB12 300-370 500X1000mm 1425C": {
//                     "ModleNo": "DSZCB12",
//                     "Thickness": "12 mm",
//                     "Weight(GSM)": "300-370",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB25 320-380 500X1000mm 1000C": {
//                     "ModleNo": "DSZCB25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1000 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB25 320-380 500X1000mm 1260C": {
//                     "ModleNo": "DSZCB25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB25 320-380 500X1000mm 1425C": {
//                     "ModleNo": "DSZCB25",
//                     "Thickness": "25 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB50 320-380 500X1000mm 1000C": {
//                     "ModleNo": "DSZCB50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1000 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB50 320-380 500X1000mm 1260C": {
//                     "ModleNo": "DSZCB50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCB50 320-380 500X1000mm": {
//                     "ModleNo": "DSZCB50",
//                     "Thickness": "50 mm",
//                     "Weight(GSM)": "320-380",
//                     "Width": "500 mm",
//                     "Length": "1000 mm",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1425 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Ceramic Fiber Paper": {
//             "products": {
//                 "DSZCP1.0 1220mmX60Meter": {
//                     "ModleNo": "DSZCP1.0",
//                     "Thickness": "1.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "60 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP2.0 1220mmX50Meter": {
//                     "ModleNo": "DSZCP2.0",
//                     "Thickness": "2.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP3.0 1220mmX30Meter": {
//                     "ModleNo": "DSZCP3.0",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "30 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP5.0 1220mmX20Meter": {
//                     "ModleNo": "DSZCP5.0",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "20 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP6.0 1220mmX15Meter": {
//                     "ModleNo": "DSZCP6.0",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "15 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP8.0 1220mmX12Meter": {
//                     "ModleNo": "DSZCP8.0",
//                     "Thickness": "8.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "12 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCP10.0 1220mmX10Meter": {
//                     "ModleNo": "DSZCP10.0",
//                     "Thickness": "10.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "1220 mm",
//                     "Length": "10 Meter",
//                     "Minrate": "60",
//                     "Color": "",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Fiberglass Tape": {
//             "products": {
//                 "DSZFTP3.25 25mm": {
//                     "ModleNo": "DSZFTP3.25",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP3.40 40mm": {
//                     "ModleNo": "DSZFTP3.40",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "40 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP3.50 50mm": {
//                     "ModleNo": "DSZFTP3.50",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP3.75 75mm": {
//                     "ModleNo": "DSZFTP3.75",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP3.100 100mm": {
//                     "ModleNo": "DSZFTP3.100",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5.25 25mm": {
//                     "ModleNo": "DSZFTP5.25",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5.40 40mm": {
//                     "ModleNo": "DSZFTP5.40",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "40 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5.50 50mm": {
//                     "ModleNo": "DSZFTP5.50",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5.75 75mm": {
//                     "ModleNo": "DSZFTP5.75",
//                     "Thickness": "5.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5.100 100mm": {
//                     "ModleNo": "DSZFTP5.100",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5M25 0.180Kg 25mmX50Meter": {
//                     "ModleNo": "DSZFTP5M25",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "0.180 Kg",
//                     "Width": "25 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5M50 0.350Kg 50mmX50Meter": {
//                     "ModleNo": "DSZFTP5M50",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "0.350 Kg",
//                     "Width": "50 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5M75 75mmX50Meter": {
//                     "ModleNo": "DSZFTP5M50",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP5M100 100mmX50Meter": {
//                     "ModleNo": "DSZFTP5M100",
//                     "Thickness": "5 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP7M25 0.230Kg 25mmX50Meter": {
//                     "ModleNo": "DSZFTP7M25",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "0.230 Kg",
//                     "Width": "25 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP7M50 0.460Kg 50mmX50Meter": {
//                     "ModleNo": "DSZFTP7M50",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "0.460 Kg",
//                     "Width": "50 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP7M75 75mmX50Meter": {
//                     "ModleNo": "DSZFTP7M50",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP7M100 100mmX50Meter": {
//                     "ModleNo": "DSZFTP7M100",
//                     "Thickness": "7 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP10M25 0.340Kg 25mmX50Meter": {
//                     "ModleNo": "DSZFTP10M25",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "0.340 Kg",
//                     "Width": "25 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP10M50 0.660Kg 50mmX50Meter": {
//                     "ModleNo": "DSZFTP10M50",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "0.660 Kg",
//                     "Width": "50 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP10M75 75mmX50Meter": {
//                     "ModleNo": "DSZFTP10M50",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 },
//                 "DSZFTP10M100 100mmX50Meter": {
//                     "ModleNo": "DSZFTP10M100",
//                     "Thickness": "10 MIL",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "50 Meter",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": ""
//                 }

//             }
//         },
//         "Signature Ceramic Fiber Tape": {
//             "products": {
//                 "DSZCTP3.25 25mm": {
//                     "ModleNo": "DSZCTP3.25",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP3.40 40mm": {
//                     "ModleNo": "DSZCTP3.40",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "40 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP3.50 50mm": {
//                     "ModleNo": "DSZCTP3.50",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP3.75 75mm": {
//                     "ModleNo": "DSZCTP3.75",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP3.100 100mm": {
//                     "ModleNo": "DSZCTP3.100",
//                     "Thickness": "3.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP6.25 25mm": {
//                     "ModleNo": "DSZCTP6.25",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP6.40 40mm": {
//                     "ModleNo": "DSZCTP6.40",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "40 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP6.50 50mm": {
//                     "ModleNo": "DSZCTP6.50",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP6.75 75mm": {
//                     "ModleNo": "DSZCTP6.75",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "75 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 },
//                 "DSZCTP6.100 100mm": {
//                     "ModleNo": "DSZCTP6.100",
//                     "Thickness": "6.0 mm",
//                     "Weight(GSM)": "",
//                     "Width": "100 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": ""
//                 }
//             }
//         },
//         "Signature Fiberglass Rope": {
//             "products": {
//                 "DSZFR.R6 6mm Round": {
//                     "ModleNo": "DSZFR.R6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R8 8mm Round": {
//                     "ModleNo": "DSZFR.R8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R10 10mm Round": {
//                     "ModleNo": "DSZFR.R10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R12 12mm Round": {
//                     "ModleNo": "DSZFR.R12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R16 16mm Round": {
//                     "ModleNo": "DSZFR.R16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R19 19mm Round": {
//                     "ModleNo": "DSZFR.R19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R25 25mm Round": {
//                     "ModleNo": "DSZFR.R25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R32 32mm Round": {
//                     "ModleNo": "DSZFR.R32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R38 38mm Round": {
//                     "ModleNo": "DSZFR.R38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.R50 50mm Round": {
//                     "ModleNo": "DSZFR.R50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZFR.S6 6mm Square": {
//                     "ModleNo": "DSZFR.S6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S8 8mm Square": {
//                     "ModleNo": "DSZFR.S8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S10 10mm Square": {
//                     "ModleNo": "DSZFR.S10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S12 12mm Square": {
//                     "ModleNo": "DSZFR.S12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S16 16mm Square": {
//                     "ModleNo": "DSZFR.S16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S19 19mm Square": {
//                     "ModleNo": "DSZFR.S19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S25 25mm Square": {
//                     "ModleNo": "DSZFR.S25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S32 32mm Square": {
//                     "ModleNo": "DSZFR.S32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S38 38mm Square": {
//                     "ModleNo": "DSZFR.S38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZFR.S50 50mm Square": {
//                     "ModleNo": "DSZFR.S50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 }

//             }
//         },
//         "Signature Ceramic Fiber Rope": {
//             "products": {
//                 "DSZCRP.R6 6mm Round": {
//                     "ModleNo": "DSZCRP.R6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R8 8mm Round": {
//                     "ModleNo": "DSZCRP.R8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R10 10mm Round": {
//                     "ModleNo": "DSZCRP.R10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R12 12mm Round": {
//                     "ModleNo": "DSZCRP.R12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R16 16mm Round": {
//                     "ModleNo": "DSZCRP.R16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R19 19mm Round": {
//                     "ModleNo": "DSZCRP.R19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R25 25mm Round": {
//                     "ModleNo": "DSZCRP.R25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R32 32mm Round": {
//                     "ModleNo": "DSZCRP.R32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R38 38mm Round": {
//                     "ModleNo": "DSZCRP.R38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.R50 50mm Round": {
//                     "ModleNo": "DSZCRP.R50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZCRP.S6 6mm Square": {
//                     "ModleNo": "DSZCRP.S6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S8 8mm Square": {
//                     "ModleNo": "DSZCRP.S8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S10 10mm Square": {
//                     "ModleNo": "DSZCRP.S10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S12 12mm Square": {
//                     "ModleNo": "DSZCRP.S12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S16 16mm Square": {
//                     "ModleNo": "DSZCRP.S16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S19 19mm Square": {
//                     "ModleNo": "DSZCRP.S19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S25 25mm Square": {
//                     "ModleNo": "DSZCRP.S25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S32 32mm Square": {
//                     "ModleNo": "DSZCRP.S32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S38 38mm Square": {
//                     "ModleNo": "DSZCRP.S38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZCRP.S50 50mm Square": {
//                     "ModleNo": "DSZCRP.S50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "",
//                     "Shape": "Square"
//                 }
//             }
//         },
//         "Signature Asbestos Rope": {
//             "products": {
//                 "DSZASBCRP6 6mm Round": {
//                     "ModleNo": "DSZASBCRP6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP8 8mm Round": {
//                     "ModleNo": "DSZASBCRP8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP10 10mm Round": {
//                     "ModleNo": "DSZASBCRP10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP12 12mm Round": {
//                     "ModleNo": "DSZASBCRP12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP16 16mm Round": {
//                     "ModleNo": "DSZASBCRP16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP19 19mm Round": {
//                     "ModleNo": "DSZASBCRP19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP25 25mm Round": {
//                     "ModleNo": "DSZASBCRP25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP32 32mm Round": {
//                     "ModleNo": "DSZASBCRP32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP38 38mm Round": {
//                     "ModleNo": "DSZASBCRP38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },
//                 "DSZASBCRP50 50mm Round": {
//                     "ModleNo": "DSZASBCRP50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Round"
//                 },

//                 "DSZASBSRP6 6mm Square": {
//                     "ModleNo": "DSZASBSRP6",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "6 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP8 8mm Square": {
//                     "ModleNo": "DSZASBSRP8",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "8 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP10 10mm Square": {
//                     "ModleNo": "DSZASBSRP10",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "10 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP12 12mm Square": {
//                     "ModleNo": "DSZASBSRP12",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "12 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP16 16mm Square": {
//                     "ModleNo": "DSZASBSRP16",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "16 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP19 19mm Square": {
//                     "ModleNo": "DSZASBSRP19",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "19 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP25 25mm Square": {
//                     "ModleNo": "DSZASBSRP25",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "25 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP32 32mm Square": {
//                     "ModleNo": "DSZASBSRP32",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "32 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP38 38mm Square": {
//                     "ModleNo": "DSZASBSRP38",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "38 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 },
//                 "DSZASBSRP50 50mm Square": {
//                     "ModleNo": "DSZASBSRP50",
//                     "Thickness": "",
//                     "Weight(GSM)": "",
//                     "Width": "50 mm",
//                     "Length": "",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C",
//                     "Melting Point": "",
//                     "Coating": "",
//                     "Shape": "Square"
//                 }
//             }
//         },
//         "Signature Asbestos Tape": {
//             "products": {
//                 "DSZASBTP3C25 25mm": {
//                     "ModleNo": "DSZASBTP3C25",
//                     "Thickness": "3.0 mm",
//                     "Width": "25 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP3C40 40mm": {
//                     "ModleNo": "DSZASBTP3C40",
//                     "Thickness": "3.0 mm",
//                     "Width": "40 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP3C50 50mm": {
//                     "ModleNo": "DSZASBTP3C50",
//                     "Thickness": "3.0 mm",
//                     "Width": "50 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP3C75 75mm": {
//                     "ModleNo": "DSZASBTP3C75",
//                     "Thickness": "3.0 mm",
//                     "Width": "75 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP3C100 100mm": {
//                     "ModleNo": "DSZASBTP3C100",
//                     "Thickness": "3.0 mm",
//                     "Width": "100 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP5C25 25mm": {
//                     "ModleNo": "DSZASBTP5C25",
//                     "Thickness": "5.0 mm",
//                     "Width": "25 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP5C40 40mm": {
//                     "ModleNo": "DSZASBTP5C40",
//                     "Thickness": "5.0 mm",
//                     "Width": "40 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP5C50 50mm": {
//                     "ModleNo": "DSZASBTP5C50",
//                     "Thickness": "5.0 mm",
//                     "Width": "50 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP5C75 75mm": {
//                     "ModleNo": "DSZASBTP5C75",
//                     "Thickness": "5.0 mm",
//                     "Width": "75 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP5C100 100mm": {
//                     "ModleNo": "DSZASBTP5C100",
//                     "Thickness": "5.0 mm",
//                     "Width": "100 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "150 C"
//                 },
//                 "DSZASBTP3S25 25mm": {
//                     "ModleNo": "DSZASBTP3S25",
//                     "Thickness": "3.0 mm",
//                     "Width": "25 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP3S40 40mm": {
//                     "ModleNo": "DSZASBTP3S40",
//                     "Thickness": "3.0 mm",
//                     "Width": "40 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP3S50 50mm": {
//                     "ModleNo": "DSZASBTP3S50",
//                     "Thickness": "3.0 mm",
//                     "Width": "50 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP3S75 75mm": {
//                     "ModleNo": "DSZASBTP3S75",
//                     "Thickness": "3.0 mm",
//                     "Width": "75 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP3S100 100mm": {
//                     "ModleNo": "DSZASBTP3S100",
//                     "Thickness": "3.0 mm",
//                     "Width": "100 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP5S25 25mm": {
//                     "ModleNo": "DSZASBTP5S25",
//                     "Thickness": "5.0 mm",
//                     "Width": "25 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP5S40 40mm": {
//                     "ModleNo": "DSZASBTP5S40",
//                     "Thickness": "5.0 mm",
//                     "Width": "40 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP5S50 50mm": {
//                     "ModleNo": "DSZASBTP5S50",
//                     "Thickness": "5.0 mm",
//                     "Width": "50 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP5S75 75mm": {
//                     "ModleNo": "DSZASBTP5S75",
//                     "Thickness": "5.0 mm",
//                     "Width": "75 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 },
//                 "DSZASBTP5S100 100mm": {
//                     "ModleNo": "DSZASBTP5S100",
//                     "Thickness": "5.0 mm",
//                     "Width": "100 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "250 C"
//                 }

//             }
//         },
//         "Signature Graphite Gland Packing Rope": {
//             "products": {
//                 "DSZGGRP Square": {
//                     "ModleNo": "DSZGGRP",
//                     "Width": "3 mm to 100 mm (Customize)",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "(-240 C) to 650 C",
//                     "Melting Point": "900 C",
//                     "Shape": "Square"

//                 }
//             }
//         },
//         "Signature PTFE Gland Packing Rope": {
//             "products": {
//                 "DSZTFGRP Square": {
//                     "ModleNo": "DSZTFGRP",
//                     "Width": "3 mm to 100 mm (Customize)",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "(-200 C) to 280 C",
//                     "Melting Point": "350 C",
//                     "Shape": "Square"

//                 }
//             }
//         },
//         "Signature Fire Blanket": {
//             "products": {
//                 "DSZFB0.4": {
//                     "ModleNo": "DSZFB0.4",
//                     "Thickness": "0.4 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB0.6": {
//                     "ModleNo": "DSZFB0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB0.8": {
//                     "ModleNo": "DSZFB0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB1.0": {
//                     "ModleNo": "DSZFB1.0",
//                     "Thickness": "1.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB1.2": {
//                     "ModleNo": "DSZFB1.2",
//                     "Thickness": "1.2 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB1.5": {
//                     "ModleNo": "DSZFB1.5",
//                     "Thickness": "1.5 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB2.0": {
//                     "ModleNo": "DSZFB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFB3.0": {
//                     "ModleNo": "DSZFB3.0",
//                     "Thickness": "3.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "600 C",
//                     "Melting Point": "900 C"
//                 }
//             }
//         },
//         "Signaure Silicon Fire Blanket": {
//             "products": {
//                 "DSZSFB0.4": {
//                     "ModleNo": "DSZSFB0.4",
//                     "Thickness": "0.4 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB0.5": {
//                     "ModleNo": "DSZSFB0.5",
//                     "Thickness": "0.5 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB0.6": {
//                     "ModleNo": "DSZSFB0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB0.8": {
//                     "ModleNo": "DSZSFB0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB1.0": {
//                     "ModleNo": "DSZSFB1.0",
//                     "Thickness": "1.0 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB1.2": {
//                     "ModleNo": "DSZSFB1.2",
//                     "Thickness": "1.2 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB1.5": {
//                     "ModleNo": "DSZSFB1.5",
//                     "Thickness": "1.5 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSFB2.0": {
//                     "ModleNo": "DSZSFB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZSSFB0.4": {
//                     "ModleNo": "DSZSSFB0.4",
//                     "Thickness": "0.4 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB0.5": {
//                     "ModleNo": "DSZSSFB0.5",
//                     "Thickness": "0.5 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB0.6": {
//                     "ModleNo": "DSZSSFB0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB0.8": {
//                     "ModleNo": "DSZSSFB0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB1.0": {
//                     "ModleNo": "DSZSSFB1.0",
//                     "Thickness": "1.0 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB1.2": {
//                     "ModleNo": "DSZSSFB1.2",
//                     "Thickness": "1.2 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB1.5": {
//                     "ModleNo": "DSZSSFB1.5",
//                     "Thickness": "1.5 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 },
//                 "DSZSSFB2.0": {
//                     "ModleNo": "DSZSSFB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "Grey / Red",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C",
//                     "Coating": "Single Side"
//                 }
//             }
//         },
//         "Signaure Medium Duty Welding Blanket": {
//             "products": {
//                 "DSZMDWB2.0 Non-Metallic": {
//                     "ModleNo": "DSZMDWB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side",
//                     "Reinforcement": "Non Metallic"
//                 },
//                 "DSZMDWB2.4 Non-Metallic": {
//                     "ModleNo": "DSZMDWB2.4",
//                     "Thickness": "2.4 mm",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side",
//                     "Reinforcement": "Non Metallic"
//                 },
//                 "DSZMDWB3.0 Non-Metallic": {
//                     "ModleNo": "DSZMDWB3.0",
//                     "Thickness": "3.0 mm",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side",
//                     "Reinforcement": "Non Metallic"
//                 },
//                 "DSZMDWB3.0 SS-Metallic": {
//                     "ModleNo": "DSZMDWB3.0",
//                     "Thickness": "3.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "Non Treated",
//                     "Reinforcement": "SS Metallic"
//                 },
//                 "DSZMDWB2.0 SS-Metallic": {
//                     "ModleNo": "DSZMDWB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "Non Treated",
//                     "Reinforcement": "SS Metallic"
//                 }
//             }
//         },
//         "Signature Graphite Fire Blanket": {
//             "products": {
//                 "DSZGFB0.6": {
//                     "ModleNo": "DSZGFB0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB0.8": {
//                     "ModleNo": "DSZGFB0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB1.0": {
//                     "ModleNo": "DSZGFB1.0",
//                     "Thickness": "1.0 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB1.2": {
//                     "ModleNo": "DSZGFB1.2",
//                     "Thickness": "1.2 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB1.5": {
//                     "ModleNo": "DSZGFB1.5",
//                     "Thickness": "1.5 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB2.0": {
//                     "ModleNo": "DSZGFB2.0",
//                     "Thickness": "2.0 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB2.5": {
//                     "ModleNo": "DSZGFB2.5",
//                     "Thickness": "2.5 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 },
//                 "DSZGFB3.0": {
//                     "ModleNo": "DSZGFB3.0",
//                     "Thickness": "3.0 mm",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "900 C",
//                     "Melting Point": "1000 C",
//                     "Coating": "Both Side"
//                 }

//             }
//         },
//         "Signature Welding Blanket": {
//             "products": {
//                 "DSZVCFWB3.2 SS-Metallic": {
//                     "ModleNo": "DSZVCFWB3.2",
//                     "Thickness": "3.2 mm",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "Both Side",
//                     "Reinforcement": "SS Metallic"
//                 },
//                 "DSZVCFWB2.8 SS-Metallic": {
//                     "ModleNo": "DSZVCFWB2.8",
//                     "Thickness": "2.8 mm",
//                     "Minrate": "60",
//                     "Color": "Brown",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C",
//                     "Coating": "Both Side",
//                     "Reinforcement": "SS Metallic"
//                 }
//             }
//         },
//         "Signature Non Asbestos Blanket": {
//             "products": {
//                 "DSZHSWB0.8": {
//                     "ModleNo": "DSZHSWB0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Ligth Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C"
//                 },
//                 "DSZHSWB1.3": {
//                     "ModleNo": "DSZHSWB1.3",
//                     "Thickness": "1.3 mm",
//                     "Minrate": "60",
//                     "Color": "Ligth Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C"
//                 },
//                 "DSZHSWB1.4": {
//                     "ModleNo": "DSZHSWB1.4",
//                     "Thickness": "1.4 mm",
//                     "Minrate": "60",
//                     "Color": "Ligth Golden",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C"
//                 }
//             }
//         },
//         "Signature Car Fire Blanket": {
//             "products": {
//                 "DSZCFB0.8 6x9 Meter": {
//                     "ModleNo": "DSZCFB0.8",
//                     "Thickness": "0.8 mm",
//                     "Width": "6 Meter",
//                     "Length": "9 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C"
//                 },
//                 "DSZCFB0.6 6x9 Meter": {
//                     "ModleNo": "DSZCFB0.6",
//                     "Thickness": "0.6 mm",
//                     "Width": "6 Meter",
//                     "Length": "9 Meter",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C"
//                 }
//             }
//         },
//         "Signature Fire Retardant Tarpuline": {
//             "products": {
//                 "DSZTRP0.5": {
//                     "ModleNo": "DSZTRP0.5",
//                     "Thickness": "0.5 mm",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C"
//                 }
//             }
//         },
//         "Signature FIre Retardant Canvas Fabric": {
//             "products": {
//                 "DSZFRC0.5": {
//                     "ModleNo": "DSZTRP0.5",
//                     "Thickness": "0.5 mm",
//                     "Minrate": "60",
//                     "Length": "50 Meter",
//                     "Color": "Grey",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFRC0.6": {
//                     "ModleNo": "DSZTRP0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Length": "50 Meter",
//                     "Color": "Grey",
//                     "Temperature Range": "550 C",
//                     "Melting Point": "900 C"
//                 }
//             }
//         },
//         "Signature Fire Curtain": {
//             "products": {
//                 "DSZFCRT0.6": {
//                     "ModleNo": "DSZFCRT0.6",
//                     "Thickness": "0.6 mm",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C"
//                 },
//                 "DSZFCRT0.8": {
//                     "ModleNo": "DSZFCRT0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "650 C",
//                     "Melting Point": "900 C"
//                 }

//             }
//         },
//         "Signature Welding Curtain": {
//             "products": {
//                 "DSZWCRT0.8": {
//                     "ModleNo": "DSZWCRT0.8",
//                     "Thickness": "0.8 mm",
//                     "Minrate": "60",
//                     "Color": "Grey",
//                     "Temperature Range": "1100 C",
//                     "Melting Point": "1800 C"
//                 },
//                 "DSZWCRT3.0": {
//                     "ModleNo": "DSZWCRT3.0",
//                     "Thickness": "3.0 mm",
//                     "Minrate": "60",
//                     "Color": "White",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1760 C"
//                 }
//             }
//         },
//         "Signature Carbonshield Blanket": {
//             "products": {
//                 "DSZCRB5.0 600GSM": {
//                     "ModleNo": "DSZCRB5.0",
//                     "Thickness": "5.0 mm",
//                     "Width": "600",
//                     "Minrate": "60",
//                     "Color": "Black",
//                     "Temperature Range": "1260 C",
//                     "Melting Point": "1800 C"
//                 }
//             }
//         },
//         "Signature Insulation Pad": {
//             "products": {
//                 "DSZIP.C": {
//                     "ModleNo": "DSZIP.C"
//                 }
//             }
//         }


//     }
// ]