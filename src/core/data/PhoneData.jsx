export const PhoneData = [
        {
            "took": 46,
            "timed_out": false,
            "aggregations": {
                "product": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "featured",
                                    "doc_count": 215,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "product": "featured"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "elite",
                                    "doc_count": 2,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "product": "elite"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                "extraFields.deliverable": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "no",
                                    "doc_count": 3465
                                },
                                {
                                    "key": "yes",
                                    "doc_count": 182
                                }
                            ]
                        }
                    }
                },
                "type": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "general",
                                    "doc_count": 3647
                                }
                            ]
                        }
                    }
                },
                "category.lvl1.externalID": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "9",
                                    "doc_count": 1930
                                },
                                {
                                    "key": "148",
                                    "doc_count": 816
                                },
                                {
                                    "key": "323",
                                    "doc_count": 582
                                },
                                {
                                    "key": "324",
                                    "doc_count": 319
                                }
                            ]
                        }
                    }
                },
                "extraFields.video": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "no",
                                    "doc_count": 3636
                                },
                                {
                                    "key": "yes",
                                    "doc_count": 11
                                }
                            ]
                        }
                    }
                },
                "extraFields.delivery": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "service",
                                    "doc_count": 182
                                },
                                {
                                    "key": "self",
                                    "doc_count": 118
                                }
                            ]
                        }
                    }
                },
                "location.lvl1": {
                    "filtered_agg": {
                        "facet": {
                            "buckets": [
                                {
                                    "key": "1-30",
                                    "doc_count": 1489,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "beirut",
                                                            "level": 1,
                                                            "name": "Beirut",
                                                            "externalID": "1-30",
                                                            "id": 2,
                                                            "name_l1": "بيروت",
                                                            "slug": "beirut"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-68",
                                    "doc_count": 505,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "metn",
                                                            "level": 1,
                                                            "name": "Metn",
                                                            "externalID": "1-68",
                                                            "id": 21,
                                                            "name_l1": "المتن",
                                                            "slug": "metn"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-55",
                                    "doc_count": 446,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "baabda",
                                                            "level": 1,
                                                            "name": "Baabda",
                                                            "externalID": "1-55",
                                                            "id": 8,
                                                            "name_l1": "بعبدا",
                                                            "slug": "baabda"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-50",
                                    "doc_count": 221,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "tripoli",
                                                            "level": 1,
                                                            "name": "Tripoli",
                                                            "externalID": "1-50",
                                                            "id": 3,
                                                            "name_l1": "طرابلس",
                                                            "slug": "tripoli"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-65",
                                    "doc_count": 199,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "keserouan",
                                                            "level": 1,
                                                            "name": "Keserouan",
                                                            "externalID": "1-65",
                                                            "id": 18,
                                                            "name_l1": "كسروان",
                                                            "slug": "keserouan"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-75",
                                    "doc_count": 185,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "international",
                                                            "level": 1,
                                                            "name": "International",
                                                            "externalID": "1-75",
                                                            "id": 28,
                                                            "name_l1": "بلاد أخرى",
                                                            "slug": "international"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-54",
                                    "doc_count": 129,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "aley",
                                                            "level": 1,
                                                            "name": "Aley",
                                                            "externalID": "1-54",
                                                            "id": 7,
                                                            "name_l1": "عاليه",
                                                            "slug": "aley"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-63",
                                    "doc_count": 86,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "jbeil",
                                                            "level": 1,
                                                            "name": "Jbeil",
                                                            "externalID": "1-63",
                                                            "id": 16,
                                                            "name_l1": "جبيل",
                                                            "slug": "jbeil"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-52",
                                    "doc_count": 79,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "saida",
                                                            "level": 1,
                                                            "name": "Saida",
                                                            "externalID": "1-52",
                                                            "id": 5,
                                                            "name_l1": "صيدا",
                                                            "slug": "saida"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-70",
                                    "doc_count": 67,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "nabatieh",
                                                            "level": 1,
                                                            "name": "Nabatieh",
                                                            "externalID": "1-70",
                                                            "id": 23,
                                                            "name_l1": "النبطية",
                                                            "slug": "nabatieh"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-60",
                                    "doc_count": 55,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "chouf",
                                                            "level": 1,
                                                            "name": "Chouf",
                                                            "externalID": "1-60",
                                                            "id": 13,
                                                            "name_l1": "الشوف",
                                                            "slug": "chouf"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-51",
                                    "doc_count": 38,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "zahle",
                                                            "level": 1,
                                                            "name": "Zahle",
                                                            "externalID": "1-51",
                                                            "id": 4,
                                                            "name_l1": "زحلة",
                                                            "slug": "zahle"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-72",
                                    "doc_count": 29,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "tyre",
                                                            "level": 1,
                                                            "name": "Tyre",
                                                            "externalID": "1-72",
                                                            "id": 25,
                                                            "name_l1": "صور",
                                                            "slug": "tyre"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-74",
                                    "doc_count": 26,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "zghorta",
                                                            "level": 1,
                                                            "name": "Zgharta",
                                                            "externalID": "1-74",
                                                            "id": 27,
                                                            "name_l1": "زغرتا",
                                                            "slug": "zghorta"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-56",
                                    "doc_count": 21,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "baalbeck",
                                                            "level": 1,
                                                            "name": "Baalbeck",
                                                            "externalID": "1-56",
                                                            "id": 9,
                                                            "name_l1": "بعلبك",
                                                            "slug": "baalbeck"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-57",
                                    "doc_count": 18,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "batroun",
                                                            "level": 1,
                                                            "name": "Batroun",
                                                            "externalID": "1-57",
                                                            "id": 10,
                                                            "name_l1": "البترون",
                                                            "slug": "batroun"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-66",
                                    "doc_count": 17,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "koura",
                                                            "level": 1,
                                                            "name": "Koura",
                                                            "externalID": "1-66",
                                                            "id": 19,
                                                            "name_l1": "الكورة",
                                                            "slug": "koura"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-69",
                                    "doc_count": 14,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "minieh-denniye",
                                                            "level": 1,
                                                            "name": "Minieh-Denniye",
                                                            "externalID": "1-69",
                                                            "id": 22,
                                                            "name_l1": "المنية الضنية",
                                                            "slug": "minieh-denniye"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-53",
                                    "doc_count": 8,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "akkar",
                                                            "level": 1,
                                                            "name": "Akkar",
                                                            "externalID": "1-53",
                                                            "id": 6,
                                                            "name_l1": "عكار",
                                                            "slug": "akkar"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "key": "1-73",
                                    "doc_count": 6,
                                    "complex_value": {
                                        "hits": {
                                            "hits": [
                                                {
                                                    "_source": {
                                                        "location.lvl1": {
                                                            "slug_l1": "west-bekaa",
                                                            "level": 1,
                                                            "name": "West Bekaa",
                                                            "externalID": "1-73",
                                                            "id": 26,
                                                            "name_l1": "البقاع الغربي",
                                                            "slug": "west-bekaa"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        },
        {
            "took": 0,
            "timed_out": false,
            "hits": {
                "total": {
                    "value": 2,
                    "relation": "eq"
                },
                "hits": [
                    {
                        "_score": 6.0846167,
                        "_source": {
                            "id": 4137051,
                            "objectID": 4137051,
                            "userExternalID": "63c3bd21-0181-4e63-8372-f7115eb75a56",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.8803,
                                "lng": 35.50419
                            },
                            "geo_point": [
                                35.50419,
                                33.8803
                            ],
                            "price": 0.0,
                            "product": "elite",
                            "productInfo": {
                                "expiresAt": 1.764966976152148E9,
                                "name": "Elite Ad for 7 Days",
                                "name_l1": "اعلان ايليت لمدة 7 ايام"
                            },
                            "activeProducts": {
                                "elite_ad": {
                                    "expiresAt": 1.764966976152148E9,
                                    "appliedAt": 1.764362176152148E9,
                                    "productPurchaseId": 850558,
                                    "name": {
                                        "en": "Elite Ad for 7 Days",
                                        "ar": "اعلان ايليت لمدة 7 ايام"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766954074857346E9,
                                    "appliedAt": 1.764362074857346E9,
                                    "productPurchaseId": 850557,
                                    "name": {
                                        "en": "Place 1 Ad for 30 days",
                                        "ar": "انشر إعلان واحد لمدة 30 يوم"
                                    }
                                }
                            },
                            "title": "One and Only",
                            "title_l1": "One and Only",
                            "description": "The one and only such a rare to find number",
                            "description_l1": "The one and only such a rare to find number",
                            "externalID": "116681405",
                            "slug": "one-and-only",
                            "slug_l1": "one-and-only",
                            "createdAt": 1.764362074858882E9,
                            "updatedAt": 1.764362176156623E9,
                            "extraFields": {
                                "price": 5000,
                                "operator": "2",
                                "membership": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Royal Numbers"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "5,000",
                                    "formattedValue_l1": "5,000"
                                },
                                {
                                    "name": "Operator",
                                    "name_l1": "الشركة المشغلة",
                                    "attribute": "operator",
                                    "formattedValue": "Alfa",
                                    "formattedValue_l1": "Alfa"
                                },
                                {
                                    "name": "Membership Type",
                                    "name_l1": "نوع الإشتراك",
                                    "attribute": "membership",
                                    "formattedValue": "Postpaid",
                                    "formattedValue_l1": "خطوط التشريج"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764362176152148E9,
                            "productScore": 10,
                            "coverPhoto": {
                                "id": 15645893,
                                "externalID": "63c3bd21-0181-4e63-8372-f7115eb75a56-e733a611-902a-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Alfa Postpaid Price السعر خطوط التشريج",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 49,
                                "level": 2,
                                "externalID": "2-179",
                                "name": "Mazraa",
                                "name_l1": "مزرعة",
                                "slug": "mazraa",
                                "slug_l1": "mazraa"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 49,
                                    "level": 2,
                                    "externalID": "2-179",
                                    "name": "Mazraa",
                                    "name_l1": "مزرعة",
                                    "slug": "mazraa",
                                    "slug_l1": "mazraa"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 72,
                                "level": 1,
                                "externalID": "323",
                                "name": "Mobile Numbers",
                                "name_l1": "أرقام الهواتف المحمولة",
                                "slug": "mobile-numbers",
                                "slug_l1": "mobile-numbers",
                                "roles": [
                                    "show_phone_number",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Number",
                                "nameSingular_l1": "Mobile Number"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 72,
                                    "level": 1,
                                    "externalID": "323",
                                    "name": "Mobile Numbers",
                                    "name_l1": "أرقام الهواتف المحمولة",
                                    "slug": "mobile-numbers",
                                    "slug_l1": "mobile-numbers",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Number",
                                    "nameSingular_l1": "Mobile Number"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15645893,
                                    "externalID": "63c3bd21-0181-4e63-8372-f7115eb75a56-e733a611-902a-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 0.9829125,
                        "_source": {
                            "id": 4143120,
                            "objectID": 4143120,
                            "userExternalID": "93ad54b2-7891-4545-834e-a75ef183f357",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.85289,
                                "lng": 35.51022
                            },
                            "geo_point": [
                                35.51022,
                                33.85289
                            ],
                            "price": 0.0,
                            "product": "elite",
                            "productInfo": {
                                "expiresAt": 1.765371229126071E9,
                                "name": "Offline: 1 Elite for 7 Days",
                                "name_l1": "Offline: 1 Elite for 7 Days"
                            },
                            "activeProducts": {
                                "elite_ad": {
                                    "expiresAt": 1.765371229126071E9,
                                    "appliedAt": 1.764766429126071E9,
                                    "productPurchaseId": 847856,
                                    "name": {
                                        "en": "Offline: 1 Elite for 7 Days",
                                        "ar": "Offline: 1 Elite for 7 Days"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767358418343758E9,
                                    "appliedAt": 1.764766418343758E9,
                                    "productPurchaseId": 847851,
                                    "name": {
                                        "en": "Offline - 50 Listings",
                                        "ar": "Offline - 50 Listings"
                                    }
                                }
                            },
                            "title": "Iphone 13 Pro - 256GB & 1TB",
                            "title_l1": "Iphone 13 Pro - 256GB & 1TB",
                            "description": "Iphone 13 Pro\n256GB\n1TB\nHigh Batteries ( above 85% )\nSuper clean , Highest Grade in lebanon\nwith warranty \n\n03915990",
                            "description_l1": "Iphone 13 Pro\n256GB\n1TB\nHigh Batteries ( above 85% )\nSuper clean , Highest Grade in lebanon\nwith warranty \n\n03915990",
                            "externalID": "116687474",
                            "slug": "iphone-13-pro-256gb-1tb",
                            "slug_l1": "iphone-13-pro-256gb-1tb",
                            "createdAt": 1.764766418345408E9,
                            "updatedAt": 1.764857170459166E9,
                            "extraFields": {
                                "make": "2",
                                "model": "13-pro",
                                "price": 499,
                                "video": "no",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "2",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 2029,
                                "objectID": 2029,
                                "name": "Rita Cell",
                                "name_l1": "Rita Cell",
                                "externalID": "5955",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 13272579,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/13272579/db6ef5397868424c81d542febda85a6b"
                                },
                                "slug": "Rita-Cell-5955",
                                "slug_l1": "Rita-Cell-5955",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2022-10-05T14:37:13+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Rita cell"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "13 Pro",
                                    "formattedValue_l1": "13 برو"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "499",
                                    "formattedValue_l1": "499"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764766429126071E9,
                            "productScore": 10,
                            "coverPhoto": {
                                "id": 15675369,
                                "externalID": "93ad54b2-7891-4545-834e-a75ef183f357-3f2c73bd-70ea-43",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "13 Pro 13 برو Agency Apple Price Used أبل السعر شركة مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 226,
                                "level": 2,
                                "externalID": "2-70",
                                "name": "Haret Hreik",
                                "name_l1": "حارة حريك",
                                "slug": "haret-hreik",
                                "slug_l1": "haret-hreik"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 226,
                                    "level": 2,
                                    "externalID": "2-70",
                                    "name": "Haret Hreik",
                                    "name_l1": "حارة حريك",
                                    "slug": "haret-hreik",
                                    "slug_l1": "haret-hreik"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15675369,
                                    "externalID": "93ad54b2-7891-4545-834e-a75ef183f357-3f2c73bd-70ea-43",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    }
                ]
            }
        },
        {
            "took": 2,
            "timed_out": false,
            "hits": {
                "total": {
                    "value": 215,
                    "relation": "eq"
                },
                "hits": [
                    {
                        "_score": 4.6891913,
                        "_source": {
                            "id": 4143360,
                            "objectID": 4143360,
                            "userExternalID": "cd848426-0ad9-419d-823a-4e516210cdbd",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.89166,
                                "lng": 35.48983
                            },
                            "geo_point": [
                                35.48983,
                                33.89166
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765984369309232E9,
                                "name": "7 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 7"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765984369309232E9,
                                    "appliedAt": 1.764774769309232E9,
                                    "productPurchaseId": 851001,
                                    "name": {
                                        "en": "7 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 7"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767366760430565E9,
                                    "appliedAt": 1.764774760430565E9,
                                    "productPurchaseId": 851000,
                                    "name": {
                                        "en": "Offline - 20 Listings",
                                        "ar": "Offline - 20 Listings"
                                    }
                                }
                            },
                            "title": "brand new iPhone 17promax 256GB Esim",
                            "title_l1": "brand new iPhone 17promax 256GB Esim",
                            "description": "iPhone 17promax 256GB new Esim",
                            "description_l1": "iPhone 17promax 256GB new Esim",
                            "externalID": "116687714",
                            "slug": "brand-new-iphone-17promax-256gb-esim",
                            "slug_l1": "brand-new-iphone-17promax-256gb-esim",
                            "createdAt": 1.764774760432381E9,
                            "updatedAt": 1.764774769312378E9,
                            "extraFields": {
                                "make": "2",
                                "color": "9",
                                "model": "17-pro-max",
                                "price": 1459,
                                "storage": "4",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 767,
                                "objectID": 767,
                                "name": "MobiCity",
                                "name_l1": "MobiCity",
                                "externalID": "890",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 3376003,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/3376003/64cea9c38658437c8f3079a1453e95d1"
                                },
                                "slug": "mobicity-890",
                                "slug_l1": "mobicity-890",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-12-13T12:18:54+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Mobicity"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Other",
                                    "formattedValue_l1": "أخرى"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "17 Pro Max",
                                    "formattedValue_l1": "آيفون 17 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,459",
                                    "formattedValue_l1": "1,459"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "256 GB",
                                    "formattedValue_l1": "256 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764774769309232E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15676866,
                                "externalID": "cd848426-0ad9-419d-823a-4e516210cdbd-79cfb1aa-af72-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "17 Pro Max 256 GB 256 جيجابايت Apple New Other Price آيفون 17 برو ماكس أبل أخرى السعر جديد",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 37,
                                "level": 2,
                                "externalID": "2-95",
                                "name": "Sanayeh",
                                "name_l1": "صنايع",
                                "slug": "sanayeh",
                                "slug_l1": "sanayeh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 37,
                                    "level": 2,
                                    "externalID": "2-95",
                                    "name": "Sanayeh",
                                    "name_l1": "صنايع",
                                    "slug": "sanayeh",
                                    "slug_l1": "sanayeh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15676866,
                                    "externalID": "cd848426-0ad9-419d-823a-4e516210cdbd-79cfb1aa-af72-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.6612344,
                        "_source": {
                            "id": 4143428,
                            "objectID": 4143428,
                            "userExternalID": "72efda3c-f096-420e-8789-f03d701d8af5",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.872,
                                "lng": 35.52513
                            },
                            "geo_point": [
                                35.52513,
                                33.872
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765987059377054E9,
                                "name": "15 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 15"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765987059377054E9,
                                    "appliedAt": 1.764777459377054E9,
                                    "productPurchaseId": 850160,
                                    "name": {
                                        "en": "15 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 15"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767369456499433E9,
                                    "appliedAt": 1.764777456499433E9,
                                    "productPurchaseId": 850159,
                                    "name": {
                                        "en": "Offline - 50 Listings",
                                        "ar": "Offline - 50 Listings"
                                    }
                                }
                            },
                            "title": "iPhone 14 Pro 512Gb used like new battery 89%",
                            "title_l1": "iPhone 14 Pro 512Gb used like new battery 89%",
                            "description": "iPhone 14 Pro 512Gb used like new battery 89%\nprice : 650$\nfor more info contact us \n71 202 502\nBeirut Ain El Remmeneh\niClass Mobile",
                            "description_l1": "iPhone 14 Pro 512Gb used like new battery 89%\nprice : 650$\nfor more info contact us \n71 202 502\nBeirut Ain El Remmeneh\niClass Mobile",
                            "externalID": "116687782",
                            "slug": "iphone-14-pro-512gb-used-like-new-battery-89",
                            "slug_l1": "iphone-14-pro-512gb-used-like-new-battery-89",
                            "createdAt": 1.764777456501213E9,
                            "updatedAt": 1.764777460422596E9,
                            "extraFields": {
                                "make": "2",
                                "color": "8",
                                "model": "14-pro",
                                "price": 650,
                                "storage": "5",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": "self",
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 2680,
                                "objectID": 2680,
                                "name": "iClass Mobile",
                                "name_l1": "iClass Mobile",
                                "externalID": "8550",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 14457570,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14457570/598becb95c7b4210b6ef23c25d67aa64"
                                },
                                "slug": "iClass-Mobile-8550",
                                "slug_l1": "iClass-Mobile-8550",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2025-06-30T13:24:29+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": ""
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "iCLASS MOBILE"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Purple",
                                    "formattedValue_l1": "أرجواني"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "14 Pro",
                                    "formattedValue_l1": "14 برو"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "650",
                                    "formattedValue_l1": "650"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764777459377054E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15677232,
                                "externalID": "72efda3c-f096-420e-8789-f03d701d8af5-cb2e7475-4594-43",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "14 Pro 14 برو 512 GB 512 جيجابايت Apple Price Purple Used أبل أرجواني السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 245,
                                "level": 2,
                                "externalID": "2-399",
                                "name": "Furn El Chebbak",
                                "name_l1": "فرن الشباك",
                                "slug": "furn-el-chebbak",
                                "slug_l1": "furn-el-chebbak"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 245,
                                    "level": 2,
                                    "externalID": "2-399",
                                    "name": "Furn El Chebbak",
                                    "name_l1": "فرن الشباك",
                                    "slug": "furn-el-chebbak",
                                    "slug_l1": "furn-el-chebbak"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "isDeliverable": true,
                            "photos": [
                                {
                                    "id": 15677232,
                                    "externalID": "72efda3c-f096-420e-8789-f03d701d8af5-cb2e7475-4594-43",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.6536345,
                        "_source": {
                            "id": 3626596,
                            "objectID": 3626596,
                            "userExternalID": "483017b0-ddee-4424-8dee-0d7c907d6d04",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.87996,
                                "lng": 35.54583
                            },
                            "geo_point": [
                                35.54583,
                                33.87996
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765090441626914E9,
                                "name": "5 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 5"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765090441626914E9,
                                    "appliedAt": 1.763880841626914E9,
                                    "productPurchaseId": 848481,
                                    "name": {
                                        "en": "5 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 5"
                                    }
                                },
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765090433263838E9,
                                    "appliedAt": 1.763880833263838E9,
                                    "productPurchaseId": 846664,
                                    "name": {
                                        "en": "12 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14يوم العدد 12"
                                    }
                                }
                            },
                            "title": "Iphone 14 pro max 256",
                            "title_l1": "Iphone 14 pro max 256",
                            "description": "Iphone 14 pro max 256: 730$\nVery clean with written warranty\nNever repaired waterproof\n\nMerry christmas (delivery available)",
                            "description_l1": "Iphone 14 pro max 256: 730$\nVery clean with written warranty\nNever repaired waterproof\n\nMerry christmas (delivery available)",
                            "externalID": "116170947",
                            "slug": "iphone-14-pro-max-128gb",
                            "slug_l1": "iphone-14-pro-max-256",
                            "createdAt": 1.763880829077178E9,
                            "updatedAt": 1.764253151956546E9,
                            "extraFields": {
                                "make": "2",
                                "price": 730,
                                "video": "no",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "2",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 550,
                                "objectID": 550,
                                "name": "Number 1 Cell",
                                "name_l1": "Number 1 Cell",
                                "externalID": "633",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 15539312,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15539312/769d4e75fb2442af892b00b73196946b"
                                },
                                "slug": "number-1-cell-633",
                                "slug_l1": "number-1-cell-633",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-06-17T11:05:36+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Number1cell"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "730",
                                    "formattedValue_l1": "730"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764831233263838E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 13024803,
                                "externalID": "483017b0-ddee-4424-8dee-0d7c907d6d04-31ac1cb4-468a-4a",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Agency Apple Price Used أبل السعر شركة مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 21,
                                "level": 1,
                                "externalID": "1-68",
                                "name": "Metn",
                                "name_l1": "المتن",
                                "slug": "metn",
                                "slug_l1": "metn"
                            },
                            "location.lvl2": {
                                "id": 421,
                                "level": 2,
                                "externalID": "2-142",
                                "name": "Dekwaneh",
                                "name_l1": "دكوانة",
                                "slug": "dekwaneh",
                                "slug_l1": "dekwaneh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 21,
                                    "level": 1,
                                    "externalID": "1-68",
                                    "name": "Metn",
                                    "name_l1": "المتن",
                                    "slug": "metn",
                                    "slug_l1": "metn"
                                },
                                {
                                    "id": 421,
                                    "level": 2,
                                    "externalID": "2-142",
                                    "name": "Dekwaneh",
                                    "name_l1": "دكوانة",
                                    "slug": "dekwaneh",
                                    "slug_l1": "dekwaneh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 13024803,
                                    "externalID": "483017b0-ddee-4424-8dee-0d7c907d6d04-31ac1cb4-468a-4a",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.642585,
                        "_source": {
                            "id": 4126623,
                            "objectID": 4126623,
                            "userExternalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.84247,
                                "lng": 35.52797
                            },
                            "geo_point": [
                                35.52797,
                                33.84247
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.764948757050019E9,
                                "name": "25 Featured ad for 14 days",
                                "name_l1": "25 Featured ad for 14 days"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.764948757050019E9,
                                    "appliedAt": 1.763739157050019E9,
                                    "productPurchaseId": 848891,
                                    "name": {
                                        "en": "25 Featured ad for 14 days",
                                        "ar": "25 Featured ad for 14 days"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766331155126138E9,
                                    "appliedAt": 1.763739155126138E9,
                                    "productPurchaseId": 848890,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "iphone 13 pro max 1 terra",
                            "title_l1": "iphone 13 pro max 1 terra",
                            "description": "battery changed\nall original\n1 terra storage\n13 pro max. black finish",
                            "description_l1": "battery changed\nall original\n1 terra storage\n13 pro max. black finish",
                            "externalID": "116670977",
                            "slug": "iphone-13-pro-max-1-terra",
                            "slug_l1": "iphone-13-pro-max-1-terra",
                            "createdAt": 1.76373915512779E9,
                            "updatedAt": 1.763739158029971E9,
                            "extraFields": {
                                "make": "2",
                                "price": 590,
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 778,
                                "objectID": 778,
                                "name": "DNS Mobile",
                                "name_l1": "DNS Mobile",
                                "externalID": "902",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 15301866,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15301866/1f4e9251a0bf4306bc1679c64c5f5f85"
                                },
                                "slug": "dns-mobile-902",
                                "slug_l1": "dns-mobile-902",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-12-18T10:52:41+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "DNS mobiles"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "590",
                                    "formattedValue_l1": "590"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.763739157050019E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15593583,
                                "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-adc947cb-6a34-40",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Apple Price Used أبل السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 228,
                                "level": 2,
                                "externalID": "2-143",
                                "name": "Hadath",
                                "name_l1": "حدت",
                                "slug": "hadath",
                                "slug_l1": "hadath"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 228,
                                    "level": 2,
                                    "externalID": "2-143",
                                    "name": "Hadath",
                                    "name_l1": "حدت",
                                    "slug": "hadath",
                                    "slug_l1": "hadath"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15593583,
                                    "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-adc947cb-6a34-40",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.6197453,
                        "_source": {
                            "id": 4126630,
                            "objectID": 4126630,
                            "userExternalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 34.43909,
                                "lng": 35.83721
                            },
                            "geo_point": [
                                35.83721,
                                34.43909
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.764948859934926E9,
                                "name": "25 Featured ad for 14 days",
                                "name_l1": "25 Featured ad for 14 days"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.764948859934926E9,
                                    "appliedAt": 1.763739259934926E9,
                                    "productPurchaseId": 848891,
                                    "name": {
                                        "en": "25 Featured ad for 14 days",
                                        "ar": "25 Featured ad for 14 days"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766331257669589E9,
                                    "appliedAt": 1.763739257669589E9,
                                    "productPurchaseId": 848890,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "iphone 14 pro max 128G purple",
                            "title_l1": "iphone 14 pro max 128G purple",
                            "description": "like new\nnever repaired\nBH 86%\nfinish purple\nstorage 128G",
                            "description_l1": "like new\nnever repaired\nBH 86%\nfinish purple\nstorage 128G",
                            "externalID": "116670984",
                            "slug": "iphone-14-pro-max-128g-purple",
                            "slug_l1": "iphone-14-pro-max-128g-purple",
                            "createdAt": 1.763739257671524E9,
                            "updatedAt": 1.76373926053282E9,
                            "extraFields": {
                                "make": "2",
                                "model": "14-pro-max",
                                "price": 680,
                                "storage": "3",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 778,
                                "objectID": 778,
                                "name": "DNS Mobile",
                                "name_l1": "DNS Mobile",
                                "externalID": "902",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 15301866,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15301866/1f4e9251a0bf4306bc1679c64c5f5f85"
                                },
                                "slug": "dns-mobile-902",
                                "slug_l1": "dns-mobile-902",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-12-18T10:52:41+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "DNS mobiles"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "14 Pro Max",
                                    "formattedValue_l1": "14 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "680",
                                    "formattedValue_l1": "680"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.763739259934926E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15593616,
                                "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-7d967afe-52f4-46",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "128 GB 128 جيجابايت 14 Pro Max 14 برو ماكس Apple Price Used أبل السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 3,
                                "level": 1,
                                "externalID": "1-50",
                                "name": "Tripoli",
                                "name_l1": "طرابلس",
                                "slug": "tripoli",
                                "slug_l1": "tripoli"
                            },
                            "location.lvl2": {
                                "id": 107,
                                "level": 2,
                                "externalID": "2-37",
                                "name": "Azmi",
                                "name_l1": "عزمي",
                                "slug": "azmi",
                                "slug_l1": "azmi"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 3,
                                    "level": 1,
                                    "externalID": "1-50",
                                    "name": "Tripoli",
                                    "name_l1": "طرابلس",
                                    "slug": "tripoli",
                                    "slug_l1": "tripoli"
                                },
                                {
                                    "id": 107,
                                    "level": 2,
                                    "externalID": "2-37",
                                    "name": "Azmi",
                                    "name_l1": "عزمي",
                                    "slug": "azmi",
                                    "slug_l1": "azmi"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15593616,
                                    "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-7d967afe-52f4-46",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.6161995,
                        "_source": {
                            "id": 4004908,
                            "objectID": 4004908,
                            "userExternalID": "b7165336-d728-4942-84f3-25745303e5db",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88006,
                                "lng": 35.50639
                            },
                            "geo_point": [
                                35.50639,
                                33.88006
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765531378135427E9,
                                "name": "40 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 40"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765531378135427E9,
                                    "appliedAt": 1.764321778135427E9,
                                    "productPurchaseId": 845560,
                                    "name": {
                                        "en": "40 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 40"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766913775627792E9,
                                    "appliedAt": 1.764321775627792E9,
                                    "productPurchaseId": 845559,
                                    "name": {
                                        "en": "Offline - 200 Listings",
                                        "ar": "Offline - 200 Listings"
                                    }
                                }
                            },
                            "title": "NEW A07 4 64 Gb & 128 gb",
                            "title_l1": "NEW A07 4 64 Gb & 128 gb",
                            "description": "NEW A07 4 64 Gb & 128 gb\n+ samssung warrantyyy\n4 ram 64 gb 87$\n4 ram 128 gb 102$",
                            "description_l1": "NEW A07 4 64 Gb & 128 gb\n+ samssung warrantyyy\n4 ram 64 gb 87$\n4 ram 128 gb 102$",
                            "externalID": "116549259",
                            "slug": "new-a07-4-64-gb-128-gb",
                            "slug_l1": "new-a07-4-64-gb-128-gb",
                            "createdAt": 1.764321775629629E9,
                            "updatedAt": 1.764586077613909E9,
                            "extraFields": {
                                "make": "11",
                                "price": 87,
                                "video": "no",
                                "storage": "3",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "2",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 2650,
                                "objectID": 2650,
                                "name": "Joundi Mobile",
                                "name_l1": "Joundi Mobile",
                                "externalID": "8384",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 13869084,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/13869084/843ef9b4793f45e09f621c1b050d2e0d"
                                },
                                "slug": "Joundi-Mobile-8384",
                                "slug_l1": "Joundi-Mobile-8384",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2025-04-04T09:17:14+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": ""
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "joundi mobile"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "87",
                                    "formattedValue_l1": "87"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764321778135427E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 14970893,
                                "externalID": "b7165336-d728-4942-84f3-25745303e5db-c12e0c26-7a24-46",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "128 GB 128 جيجابايت Agency New Price Samsung السعر جديد سامسونج شركة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 46,
                                "level": 2,
                                "externalID": "2-118",
                                "name": "Ras Al Nabaa",
                                "name_l1": "راس النبع",
                                "slug": "Ras-Al-Nabaa",
                                "slug_l1": "Ras-Al-Nabaa"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 46,
                                    "level": 2,
                                    "externalID": "2-118",
                                    "name": "Ras Al Nabaa",
                                    "name_l1": "راس النبع",
                                    "slug": "Ras-Al-Nabaa",
                                    "slug_l1": "Ras-Al-Nabaa"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 14970893,
                                    "externalID": "b7165336-d728-4942-84f3-25745303e5db-c12e0c26-7a24-46",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.604781,
                        "_source": {
                            "id": 4121722,
                            "objectID": 4121722,
                            "userExternalID": "ea0d0e99-6f62-490c-813b-118da0b761d0",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.89166,
                                "lng": 35.48983
                            },
                            "geo_point": [
                                35.48983,
                                33.89166
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765817032518556E9,
                                "name": "7 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 7"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765817032518556E9,
                                    "appliedAt": 1.764607432518556E9,
                                    "productPurchaseId": 849321,
                                    "name": {
                                        "en": "7 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 7"
                                    }
                                }
                            },
                            "title": "Honor magic v3 512gb new",
                            "title_l1": "Honor magic v3 512gb new",
                            "description": "Honor Magic V3 512GB\nnew with all accessories\n\n1200$",
                            "description_l1": "Honor Magic V3 512GB\nnew with all accessories\n\n1200$",
                            "externalID": "116666076",
                            "slug": "honor-magic-v3-512gb-new",
                            "slug_l1": "honor-magic-v3-512gb-new",
                            "createdAt": 1.763479467945657E9,
                            "updatedAt": 1.764607432524545E9,
                            "extraFields": {
                                "make": "22",
                                "color": "9",
                                "model": "magic-v3",
                                "price": 1200,
                                "storage": "5",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 2369,
                                "objectID": 2369,
                                "name": "Mobile X",
                                "name_l1": "Mobile X",
                                "externalID": "7369",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 15658318,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15658318/2ec8109169224d74be8ea6b418a26107"
                                },
                                "slug": "MobileX-7369",
                                "slug_l1": "MobileX-7369",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2023-09-06T06:50:07+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Mobile X"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Honor",
                                    "formattedValue_l1": "هونور"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Other",
                                    "formattedValue_l1": "أخرى"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "Magic V3",
                                    "formattedValue_l1": "ماجيك في 3"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,200",
                                    "formattedValue_l1": "1,200"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764607432518556E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15567413,
                                "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-c71c2350-4eb4-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 6,
                            "keywords": "512 GB 512 جيجابايت Honor Magic V3 New Other Price أخرى السعر جديد ماجيك في 3 هونور",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 37,
                                "level": 2,
                                "externalID": "2-95",
                                "name": "Sanayeh",
                                "name_l1": "صنايع",
                                "slug": "sanayeh",
                                "slug_l1": "sanayeh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 37,
                                    "level": 2,
                                    "externalID": "2-95",
                                    "name": "Sanayeh",
                                    "name_l1": "صنايع",
                                    "slug": "sanayeh",
                                    "slug_l1": "sanayeh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15567413,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-c71c2350-4eb4-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15567414,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-7f251fe0-b9b2-40",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15567415,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-d33b903f-9cdc-4e",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15567416,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-89076de9-714b-43",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15567417,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-98371ceb-0e48-4b",
                                    "title": null,
                                    "orderIndex": 4,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15567418,
                                    "externalID": "ea0d0e99-6f62-490c-813b-118da0b761d0-8cc4a99a-a9f3-47",
                                    "title": null,
                                    "orderIndex": 5,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.5641456,
                        "_source": {
                            "id": 4121700,
                            "objectID": 4121700,
                            "userExternalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88494,
                                "lng": 35.51884
                            },
                            "geo_point": [
                                35.51884,
                                33.88494
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765464143653447E9,
                                "name": "35 Featured ad for 14 days",
                                "name_l1": "إعلان مميز لمدة 14 يوم - العدد 35"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765464143653447E9,
                                    "appliedAt": 1.764254543653447E9,
                                    "productPurchaseId": 847873,
                                    "name": {
                                        "en": "35 Featured ad for 14 days",
                                        "ar": "إعلان مميز لمدة 14 يوم - العدد 35"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766070757599561E9,
                                    "appliedAt": 1.763478757599561E9,
                                    "productPurchaseId": 847870,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "71 444 800 touch prepaid",
                            "title_l1": "71 444 800 touch prepaid",
                            "description": "71 444 800 touch prepaid",
                            "description_l1": "71 444 800 touch prepaid",
                            "externalID": "116666054",
                            "slug": "71-444-800-touch-prepaid",
                            "slug_l1": "71-444-800-touch-prepaid",
                            "createdAt": 1.763478757601454E9,
                            "updatedAt": 1.764254543659164E9,
                            "extraFields": {
                                "price": 950,
                                "video": "no",
                                "operator": "1",
                                "membership": "1",
                                "price_type": "price",
                                "seller_type": "2",
                                "deliverable": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 967,
                                "objectID": 967,
                                "name": "wael",
                                "name_l1": "wael",
                                "externalID": "1157",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "slug": "wael-1157",
                                "slug_l1": "wael-1157",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "disable_ad_card_logo",
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2022-03-24T11:03:56+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "wael"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "950",
                                    "formattedValue_l1": "950"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Operator",
                                    "name_l1": "الشركة المشغلة",
                                    "attribute": "operator",
                                    "formattedValue": "Touch",
                                    "formattedValue_l1": "Touch"
                                },
                                {
                                    "name": "Membership Type",
                                    "name_l1": "نوع الإشتراك",
                                    "attribute": "membership",
                                    "formattedValue": "Prepaid",
                                    "formattedValue_l1": "خطوط المسبقة الدفع"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764254543653447E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 15567253,
                                "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-d5bf88d0-4788-4c",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Agency Prepaid Price Touch السعر خطوط المسبقة الدفع شركة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 40,
                                "level": 2,
                                "externalID": "2-101",
                                "name": "Achrafieh",
                                "name_l1": "أشرفية",
                                "slug": "achrafieh",
                                "slug_l1": "achrafieh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 40,
                                    "level": 2,
                                    "externalID": "2-101",
                                    "name": "Achrafieh",
                                    "name_l1": "أشرفية",
                                    "slug": "achrafieh",
                                    "slug_l1": "achrafieh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 72,
                                "level": 1,
                                "externalID": "323",
                                "name": "Mobile Numbers",
                                "name_l1": "أرقام الهواتف المحمولة",
                                "slug": "mobile-numbers",
                                "slug_l1": "mobile-numbers",
                                "roles": [
                                    "show_phone_number",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Number",
                                "nameSingular_l1": "Mobile Number"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 72,
                                    "level": 1,
                                    "externalID": "323",
                                    "name": "Mobile Numbers",
                                    "name_l1": "أرقام الهواتف المحمولة",
                                    "slug": "mobile-numbers",
                                    "slug_l1": "mobile-numbers",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Number",
                                    "nameSingular_l1": "Mobile Number"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15567253,
                                    "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-d5bf88d0-4788-4c",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": 4.513484,
                        "_source": {
                            "id": 3536897,
                            "objectID": 3536897,
                            "userExternalID": "483017b0-ddee-4424-8dee-0d7c907d6d04",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.87996,
                                "lng": 35.54583
                            },
                            "geo_point": [
                                35.54583,
                                33.87996
                            ],
                            "price": 0.0,
                            "product": "featured",
                            "productInfo": {
                                "expiresAt": 1.765359529690594E9,
                                "name": "25 Featured ad for 14 days",
                                "name_l1": "25 Featured ad for 14 days"
                            },
                            "activeProducts": {
                                "featured_ad": {
                                    "expiresAt": 1.765359529690594E9,
                                    "appliedAt": 1.764149929690594E9,
                                    "productPurchaseId": 846663,
                                    "name": {
                                        "en": "25 Featured ad for 14 days",
                                        "ar": "25 Featured ad for 14 days"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766741926278465E9,
                                    "appliedAt": 1.764149926278465E9,
                                    "productPurchaseId": 846662,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "Iphone 13 256gb",
                            "title_l1": "Iphone 13 256gb",
                            "description": "Iphone 13 256gb: 389$\nVery clean \nWith 2 months written warranty",
                            "description_l1": "Iphone 13 256gb: 389$\nVery clean \nWith 2 months written warranty",
                            "externalID": "116081248",
                            "slug": "iphone-13-128gb",
                            "slug_l1": "iphone-13-256gb",
                            "createdAt": 1.764149926280323E9,
                            "updatedAt": 1.764252152179746E9,
                            "extraFields": {
                                "make": "2",
                                "price": 389,
                                "video": "no",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "2",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 550,
                                "objectID": 550,
                                "name": "Number 1 Cell",
                                "name_l1": "Number 1 Cell",
                                "externalID": "633",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 15539312,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15539312/769d4e75fb2442af892b00b73196946b"
                                },
                                "slug": "number-1-cell-633",
                                "slug_l1": "number-1-cell-633",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-06-17T11:05:36+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Number1cell"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "389",
                                    "formattedValue_l1": "389"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764149929690594E9,
                            "productScore": 9,
                            "coverPhoto": {
                                "id": 13024766,
                                "externalID": "483017b0-ddee-4424-8dee-0d7c907d6d04-3d547ddc-6b9d-44",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Agency Apple Price Used أبل السعر شركة مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 21,
                                "level": 1,
                                "externalID": "1-68",
                                "name": "Metn",
                                "name_l1": "المتن",
                                "slug": "metn",
                                "slug_l1": "metn"
                            },
                            "location.lvl2": {
                                "id": 421,
                                "level": 2,
                                "externalID": "2-142",
                                "name": "Dekwaneh",
                                "name_l1": "دكوانة",
                                "slug": "dekwaneh",
                                "slug_l1": "dekwaneh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 21,
                                    "level": 1,
                                    "externalID": "1-68",
                                    "name": "Metn",
                                    "name_l1": "المتن",
                                    "slug": "metn",
                                    "slug_l1": "metn"
                                },
                                {
                                    "id": 421,
                                    "level": 2,
                                    "externalID": "2-142",
                                    "name": "Dekwaneh",
                                    "name_l1": "دكوانة",
                                    "slug": "dekwaneh",
                                    "slug_l1": "dekwaneh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 13024766,
                                    "externalID": "483017b0-ddee-4424-8dee-0d7c907d6d04-3d547ddc-6b9d-44",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    }
                ]
            }
        },
        {
            "took": 3,
            "timed_out": false,
            "hits": {
                "total": {
                    "value": 3645,
                    "relation": "eq"
                },
                "hits": [
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145137,
                            "objectID": 4145137,
                            "userExternalID": "105c56ba-f906-40a3-860d-dd95c03b56b1",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.8148,
                                "lng": 35.51853
                            },
                            "geo_point": [
                                35.51853,
                                33.8148
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "Samsung S21 plus 5g",
                            "title_l1": "Samsung S21 plus 5g",
                            "description": "خارق النضافة بعدو جديد مستعمل شي بسيط \n128G \n8R\nموجود بيروت السعر منهي 150$\n03045826",
                            "description_l1": "خارق النضافة بعدو جديد مستعمل شي بسيط \n128G \n8R\nموجود بيروت السعر منهي 150$\n03045826",
                            "externalID": "116689491",
                            "slug": "samsung-s21-plus-5g",
                            "slug_l1": "samsung-s21-plus-5g",
                            "createdAt": 1.764874520381674E9,
                            "updatedAt": 1.764874541605736E9,
                            "extraFields": {
                                "make": "11",
                                "color": "2",
                                "model": "s21-plus",
                                "price": 150,
                                "storage": "3",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "User 5ZD5rH"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "S21 Plus",
                                    "formattedValue_l1": "اس 21 بلس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "150",
                                    "formattedValue_l1": "150"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764874520381674E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15686160,
                                "externalID": "105c56ba-f906-40a3-860d-dd95c03b56b1-a8a9e7c8-a4ef-48",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 3,
                            "keywords": "128 GB 128 جيجابايت Black New Price S21 Plus Samsung أسود اس 21 بلس السعر جديد سامسونج",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 7,
                                "level": 1,
                                "externalID": "1-54",
                                "name": "Aley",
                                "name_l1": "عاليه",
                                "slug": "aley",
                                "slug_l1": "aley"
                            },
                            "location.lvl2": {
                                "id": 197,
                                "level": 2,
                                "externalID": "2-127",
                                "name": "Choueifat",
                                "name_l1": "شويفات",
                                "slug": "choueifat",
                                "slug_l1": "choueifat"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 7,
                                    "level": 1,
                                    "externalID": "1-54",
                                    "name": "Aley",
                                    "name_l1": "عاليه",
                                    "slug": "aley",
                                    "slug_l1": "aley"
                                },
                                {
                                    "id": 197,
                                    "level": 2,
                                    "externalID": "2-127",
                                    "name": "Choueifat",
                                    "name_l1": "شويفات",
                                    "slug": "choueifat",
                                    "slug_l1": "choueifat"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15686160,
                                    "externalID": "105c56ba-f906-40a3-860d-dd95c03b56b1-a8a9e7c8-a4ef-48",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15686161,
                                    "externalID": "105c56ba-f906-40a3-860d-dd95c03b56b1-44ec6962-52fe-42",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15686162,
                                    "externalID": "105c56ba-f906-40a3-860d-dd95c03b56b1-d2696903-8681-4f",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145116,
                            "objectID": 4145116,
                            "userExternalID": "07e897af-3a7e-48c4-98f7-d0bcc84bc486",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.38945,
                                "lng": 35.44563
                            },
                            "geo_point": [
                                35.44563,
                                33.38945
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "ايفون اكس ماكس",
                            "title_l1": "ايفون اكس ماكس",
                            "description": "ايفون اكس اس ماكس شريحتين فيس ايدي شغال\nترتون شغال ذكره64 عالفحص",
                            "description_l1": "ايفون اكس اس ماكس شريحتين فيس ايدي شغال\nترتون شغال ذكره64 عالفحص",
                            "externalID": "116689470",
                            "slug": "ايفون-اكس-ماكس",
                            "slug_l1": "ايفون-اكس-ماكس",
                            "createdAt": 1.76487366589037E9,
                            "updatedAt": 1.764873674606824E9,
                            "extraFields": {
                                "make": "2",
                                "color": "5",
                                "model": "xs-max",
                                "price": 150,
                                "storage": "2",
                                "new_used": "2",
                                "price_type": "price",
                                "secondary_price": 9,
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "User 4uN8r3"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Gold",
                                    "formattedValue_l1": "ذهبي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "XS Max",
                                    "formattedValue_l1": "اكس اس ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "150",
                                    "formattedValue_l1": "150"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "64 GB",
                                    "formattedValue_l1": "64 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "LL",
                                    "name_l1": "السعر بالليرة",
                                    "attribute": "secondary_price",
                                    "formattedValue": "9",
                                    "formattedValue_l1": "9"
                                }
                            ],
                            "timestamp": 1.76487366589037E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15686012,
                                "externalID": "07e897af-3a7e-48c4-98f7-d0bcc84bc486-080dd2a0-1a63-44",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "64 GB 64 جيجابايت Apple Gold Price Used XS Max أبل اكس اس ماكس السعر ذهبي مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 23,
                                "level": 1,
                                "externalID": "1-70",
                                "name": "Nabatieh",
                                "name_l1": "النبطية",
                                "slug": "nabatieh",
                                "slug_l1": "nabatieh"
                            },
                            "location.lvl2": {
                                "id": 497,
                                "level": 2,
                                "externalID": "2-438",
                                "name": "Toul",
                                "name_l1": "تول",
                                "slug": "toul",
                                "slug_l1": "toul"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 23,
                                    "level": 1,
                                    "externalID": "1-70",
                                    "name": "Nabatieh",
                                    "name_l1": "النبطية",
                                    "slug": "nabatieh",
                                    "slug_l1": "nabatieh"
                                },
                                {
                                    "id": 497,
                                    "level": 2,
                                    "externalID": "2-438",
                                    "name": "Toul",
                                    "name_l1": "تول",
                                    "slug": "toul",
                                    "slug_l1": "toul"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15686012,
                                    "externalID": "07e897af-3a7e-48c4-98f7-d0bcc84bc486-080dd2a0-1a63-44",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15686013,
                                    "externalID": "07e897af-3a7e-48c4-98f7-d0bcc84bc486-65c0e565-c40f-42",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145114,
                            "objectID": 4145114,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.76746560568092E9,
                                    "appliedAt": 1.76487360568092E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "Hoco w61 headset",
                            "title_l1": "Hoco w61 headset",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689468",
                            "slug": "hoco-w61-headset",
                            "slug_l1": "hoco-w61-headset",
                            "createdAt": 1.764873605682285E9,
                            "updatedAt": 1.764873613077725E9,
                            "extraFields": {
                                "price": 12,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "headphones",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "12",
                                    "formattedValue_l1": "12"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Headphones",
                                    "formattedValue_l1": "سمّاعات الرأس"
                                }
                            ],
                            "timestamp": 1.764873605682285E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15686007,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-d665ca27-6afb-49",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Headphones New Price السعر جديد سمّاعات الرأس",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15686007,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-d665ca27-6afb-49",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 2275838,
                            "objectID": 2275838,
                            "userExternalID": "d96121f9-5f4f-4087-8c37-18325efc0a00",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.85145,
                                "lng": 35.49831
                            },
                            "geo_point": [
                                35.49831,
                                33.85145
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "اغطيه هواتف قديمه الواحد ٣٠ الف",
                            "title_l1": "اغطيه هواتف قديمه الواحد ٣٠ الف",
                            "description": "اغطيه هواتف الواحد ٣٠ الف. . . . . .",
                            "description_l1": "اغطيه هواتف الواحد ٣٠ الف. . . . . .",
                            "externalID": "114820189",
                            "slug": "اغطيه-هواتف",
                            "slug_l1": "اغطيه-هواتف-قديمه-الواحد-٣٠-الف",
                            "createdAt": 1.764873415317237E9,
                            "updatedAt": 1.764873416207712E9,
                            "extraFields": {
                                "make": "18",
                                "price": 1,
                                "video": "no",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "accessory_type": "5",
                                "secondary_price": 30000,
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "husam "
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Other brands",
                                    "formattedValue_l1": "ماركة اخرى"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1",
                                    "formattedValue_l1": "1"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Phone Covers",
                                    "formattedValue_l1": "أغطية هواتف"
                                },
                                {
                                    "name": "LL",
                                    "name_l1": "السعر بالليرة",
                                    "attribute": "secondary_price",
                                    "formattedValue": "30,000",
                                    "formattedValue_l1": "30,000"
                                }
                            ],
                            "timestamp": 1.764873415317237E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 6822990,
                                "externalID": "d96121f9-5f4f-4087-8c37-18325efc0a00-49f53f8a-1b61-43",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "Individual New Other brands Phone Covers Price أغطية هواتف السعر جديد فرد ماركة اخرى",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 32,
                                "level": 2,
                                "externalID": "2-90",
                                "name": "Chiyah",
                                "name_l1": "الشياح",
                                "slug": "chiyah",
                                "slug_l1": "chiyah"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 32,
                                    "level": 2,
                                    "externalID": "2-90",
                                    "name": "Chiyah",
                                    "name_l1": "الشياح",
                                    "slug": "chiyah",
                                    "slug_l1": "chiyah"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 6822990,
                                    "externalID": "d96121f9-5f4f-4087-8c37-18325efc0a00-49f53f8a-1b61-43",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 6822991,
                                    "externalID": "d96121f9-5f4f-4087-8c37-18325efc0a00-6ce0c552-ae71-45",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145104,
                            "objectID": 4145104,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.767465314593982E9,
                                    "appliedAt": 1.764873314593982E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "Porodo pd powerbank 10000mah",
                            "title_l1": "Porodo pd powerbank 10000mah",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689458",
                            "slug": "porodo-pd-powerbank-10000mah",
                            "slug_l1": "porodo-pd-powerbank-10000mah",
                            "createdAt": 1.764873314595593E9,
                            "updatedAt": 1.764873323590389E9,
                            "extraFields": {
                                "price": 25,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "4",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "25",
                                    "formattedValue_l1": "25"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Power Banks",
                                    "formattedValue_l1": "شواحن محمولة"
                                }
                            ],
                            "timestamp": 1.764873314595593E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685925,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-31824624-f4ee-4e",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "New Power Banks Price السعر جديد شواحن محمولة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685925,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-31824624-f4ee-4e",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4141776,
                            "objectID": 4141776,
                            "userExternalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88494,
                                "lng": 35.51884
                            },
                            "geo_point": [
                                35.51884,
                                33.88494
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765996505785686E9,
                                    "appliedAt": 1.764786905785686E9,
                                    "productPurchaseId": 847875,
                                    "name": {
                                        "en": "15 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم العدد 15"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767279161392547E9,
                                    "appliedAt": 1.764687161392547E9,
                                    "productPurchaseId": 847870,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "81 909991 touch prepaid",
                            "title_l1": "81 909991 touch prepaid",
                            "description": "81 909991 touch prepaid",
                            "description_l1": "81 909991 touch prepaid",
                            "externalID": "116686130",
                            "slug": "81-909991-touch-prepaid",
                            "slug_l1": "81-909991-touch-prepaid",
                            "createdAt": 1.764687161394694E9,
                            "updatedAt": 1.764786905789288E9,
                            "extraFields": {
                                "price": 650,
                                "video": "no",
                                "operator": "1",
                                "membership": "1",
                                "price_type": "price",
                                "seller_type": "2",
                                "deliverable": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 967,
                                "objectID": 967,
                                "name": "wael",
                                "name_l1": "wael",
                                "externalID": "1157",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "slug": "wael-1157",
                                "slug_l1": "wael-1157",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "disable_ad_card_logo",
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2022-03-24T11:03:56+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "wael"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "650",
                                    "formattedValue_l1": "650"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Operator",
                                    "name_l1": "الشركة المشغلة",
                                    "attribute": "operator",
                                    "formattedValue": "Touch",
                                    "formattedValue_l1": "Touch"
                                },
                                {
                                    "name": "Membership Type",
                                    "name_l1": "نوع الإشتراك",
                                    "attribute": "membership",
                                    "formattedValue": "Prepaid",
                                    "formattedValue_l1": "خطوط المسبقة الدفع"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764873305785686E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15669801,
                                "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-245dfe75-74f1-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Agency Prepaid Price Touch السعر خطوط المسبقة الدفع شركة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 40,
                                "level": 2,
                                "externalID": "2-101",
                                "name": "Achrafieh",
                                "name_l1": "أشرفية",
                                "slug": "achrafieh",
                                "slug_l1": "achrafieh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 40,
                                    "level": 2,
                                    "externalID": "2-101",
                                    "name": "Achrafieh",
                                    "name_l1": "أشرفية",
                                    "slug": "achrafieh",
                                    "slug_l1": "achrafieh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 72,
                                "level": 1,
                                "externalID": "323",
                                "name": "Mobile Numbers",
                                "name_l1": "أرقام الهواتف المحمولة",
                                "slug": "mobile-numbers",
                                "slug_l1": "mobile-numbers",
                                "roles": [
                                    "show_phone_number",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Number",
                                "nameSingular_l1": "Mobile Number"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 72,
                                    "level": 1,
                                    "externalID": "323",
                                    "name": "Mobile Numbers",
                                    "name_l1": "أرقام الهواتف المحمولة",
                                    "slug": "mobile-numbers",
                                    "slug_l1": "mobile-numbers",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Number",
                                    "nameSingular_l1": "Mobile Number"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15669801,
                                    "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-245dfe75-74f1-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4017122,
                            "objectID": 4017122,
                            "userExternalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88494,
                                "lng": 35.51884
                            },
                            "geo_point": [
                                35.51884,
                                33.88494
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765996484858202E9,
                                    "appliedAt": 1.764786884858202E9,
                                    "productPurchaseId": 847875,
                                    "name": {
                                        "en": "15 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم العدد 15"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.765656857304073E9,
                                    "appliedAt": 1.763064857304073E9,
                                    "productPurchaseId": 843149,
                                    "name": {
                                        "en": "Offline - 100 Listings",
                                        "ar": "Offline - 100 Listings"
                                    }
                                }
                            },
                            "title": "76666909 touch prepaid",
                            "title_l1": "76666909 touch prepaid",
                            "description": "76666909 touch prepaid",
                            "description_l1": "76666909 touch prepaid",
                            "externalID": "116561473",
                            "slug": "76666909-touch-prepaid",
                            "slug_l1": "76666909-touch-prepaid",
                            "createdAt": 1.763064857305541E9,
                            "updatedAt": 1.764786884875367E9,
                            "extraFields": {
                                "price": 1200,
                                "video": "no",
                                "operator": "1",
                                "membership": "1",
                                "price_type": "price",
                                "seller_type": "2",
                                "deliverable": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "agency": {
                                "id": 967,
                                "objectID": 967,
                                "name": "wael",
                                "name_l1": "wael",
                                "externalID": "1157",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "slug": "wael-1157",
                                "slug_l1": "wael-1157",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "disable_ad_card_logo",
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2022-03-24T11:03:56+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "wael"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,200",
                                    "formattedValue_l1": "1,200"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Operator",
                                    "name_l1": "الشركة المشغلة",
                                    "attribute": "operator",
                                    "formattedValue": "Touch",
                                    "formattedValue_l1": "Touch"
                                },
                                {
                                    "name": "Membership Type",
                                    "name_l1": "نوع الإشتراك",
                                    "attribute": "membership",
                                    "formattedValue": "Prepaid",
                                    "formattedValue_l1": "خطوط المسبقة الدفع"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Agency",
                                    "formattedValue_l1": "شركة"
                                }
                            ],
                            "timestamp": 1.764873284858202E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15218158,
                                "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-7e7e49da-6763-4d",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Agency Prepaid Price Touch السعر خطوط المسبقة الدفع شركة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 40,
                                "level": 2,
                                "externalID": "2-101",
                                "name": "Achrafieh",
                                "name_l1": "أشرفية",
                                "slug": "achrafieh",
                                "slug_l1": "achrafieh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 40,
                                    "level": 2,
                                    "externalID": "2-101",
                                    "name": "Achrafieh",
                                    "name_l1": "أشرفية",
                                    "slug": "achrafieh",
                                    "slug_l1": "achrafieh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 72,
                                "level": 1,
                                "externalID": "323",
                                "name": "Mobile Numbers",
                                "name_l1": "أرقام الهواتف المحمولة",
                                "slug": "mobile-numbers",
                                "slug_l1": "mobile-numbers",
                                "roles": [
                                    "show_phone_number",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Number",
                                "nameSingular_l1": "Mobile Number"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 72,
                                    "level": 1,
                                    "externalID": "323",
                                    "name": "Mobile Numbers",
                                    "name_l1": "أرقام الهواتف المحمولة",
                                    "slug": "mobile-numbers",
                                    "slug_l1": "mobile-numbers",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Number",
                                    "nameSingular_l1": "Mobile Number"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15218158,
                                    "externalID": "9d6e279d-e1cd-45c3-83d5-d322aee81526-7e7e49da-6763-4d",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145093,
                            "objectID": 4145093,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.76746493279896E9,
                                    "appliedAt": 1.76487293279896E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "WIWU ELITE POWER BANK WI-P018 WITH STAND",
                            "title_l1": "WIWU ELITE POWER BANK WI-P018 WITH STAND",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689447",
                            "slug": "wiwu-elite-power-bank-wi-p018-with-stand",
                            "slug_l1": "wiwu-elite-power-bank-wi-p018-with-stand",
                            "createdAt": 1.764872932801211E9,
                            "updatedAt": 1.764873217617281E9,
                            "extraFields": {
                                "price": 23,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "4",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "23",
                                    "formattedValue_l1": "23"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Power Banks",
                                    "formattedValue_l1": "شواحن محمولة"
                                }
                            ],
                            "timestamp": 1.764872932801211E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685866,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-674dbcf8-65fd-49",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "New Power Banks Price السعر جديد شواحن محمولة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685866,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-674dbcf8-65fd-49",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145092,
                            "objectID": 4145092,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.767464857112721E9,
                                    "appliedAt": 1.764872857112721E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "HOCO BT HEADPHONES (BT/AUX PLAYBACK MODES) W66",
                            "title_l1": "HOCO BT HEADPHONES (BT/AUX PLAYBACK MODES) W66",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689446",
                            "slug": "hoco-bt-headphones-btaux-playback-modes-w66",
                            "slug_l1": "hoco-bt-headphones-btaux-playback-modes-w66",
                            "createdAt": 1.764872857114198E9,
                            "updatedAt": 1.764872861183593E9,
                            "extraFields": {
                                "price": 11,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "headphones",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "11",
                                    "formattedValue_l1": "11"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Headphones",
                                    "formattedValue_l1": "سمّاعات الرأس"
                                }
                            ],
                            "timestamp": 1.764872857114198E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685865,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-5e43ce1c-ceda-45",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Headphones New Price السعر جديد سمّاعات الرأس",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685865,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-5e43ce1c-ceda-45",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145089,
                            "objectID": 4145089,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.767464759551211E9,
                                    "appliedAt": 1.764872759551211E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "HOCO WIRELESS HEADPHONES AIR LIGHT W35",
                            "title_l1": "HOCO WIRELESS HEADPHONES AIR LIGHT W35",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689443",
                            "slug": "hoco-wireless-headphones-air-light-w35",
                            "slug_l1": "hoco-wireless-headphones-air-light-w35",
                            "createdAt": 1.764872759552869E9,
                            "updatedAt": 1.764873182649993E9,
                            "extraFields": {
                                "price": 13,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "headphones",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "13",
                                    "formattedValue_l1": "13"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Headphones",
                                    "formattedValue_l1": "سمّاعات الرأس"
                                }
                            ],
                            "timestamp": 1.764872759552869E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685856,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-409f5438-0d8b-4d",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Headphones New Price السعر جديد سمّاعات الرأس",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685856,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-409f5438-0d8b-4d",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145087,
                            "objectID": 4145087,
                            "userExternalID": "14cc0672-9296-4496-82e2-28011e55c718",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.84247,
                                "lng": 35.52797
                            },
                            "geo_point": [
                                35.52797,
                                33.84247
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "honor x9d new",
                            "title_l1": "honor x9d new",
                            "description": "honor x9d new used 2 weeks",
                            "description_l1": "honor x9d new used 2 weeks",
                            "externalID": "116689441",
                            "slug": "honor-x9d-new",
                            "slug_l1": "honor-x9d-new",
                            "createdAt": 1.764872679972711E9,
                            "updatedAt": 1.764872687875294E9,
                            "extraFields": {
                                "make": "22",
                                "color": "9",
                                "model": "9x",
                                "price": 290,
                                "storage": "4",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": "self",
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "hasan"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Honor",
                                    "formattedValue_l1": "هونور"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Other",
                                    "formattedValue_l1": "أخرى"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "9X",
                                    "formattedValue_l1": "اكس 9"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "290",
                                    "formattedValue_l1": "290"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "256 GB",
                                    "formattedValue_l1": "256 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764872679972711E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685851,
                                "externalID": "14cc0672-9296-4496-82e2-28011e55c718-8afd800b-44fe-48",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "256 GB 256 جيجابايت 9X Honor New Other Price أخرى اكس 9 السعر جديد هونور",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 228,
                                "level": 2,
                                "externalID": "2-143",
                                "name": "Hadath",
                                "name_l1": "حدت",
                                "slug": "hadath",
                                "slug_l1": "hadath"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 228,
                                    "level": 2,
                                    "externalID": "2-143",
                                    "name": "Hadath",
                                    "name_l1": "حدت",
                                    "slug": "hadath",
                                    "slug_l1": "hadath"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "isDeliverable": true,
                            "photos": [
                                {
                                    "id": 15685851,
                                    "externalID": "14cc0672-9296-4496-82e2-28011e55c718-8afd800b-44fe-48",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145086,
                            "objectID": 4145086,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.767464645653712E9,
                                    "appliedAt": 1.764872645653712E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "HOCO POWER BANK 20000MAH J101A",
                            "title_l1": "HOCO POWER BANK 20000MAH J101A",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689440",
                            "slug": "hoco-power-bank-20000mah-j101a",
                            "slug_l1": "hoco-power-bank-20000mah-j101a",
                            "createdAt": 1.764872645655405E9,
                            "updatedAt": 1.764873173367569E9,
                            "extraFields": {
                                "price": 15,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "4",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "15",
                                    "formattedValue_l1": "15"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Power Banks",
                                    "formattedValue_l1": "شواحن محمولة"
                                }
                            ],
                            "timestamp": 1.764872645655405E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685850,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-af4f84e1-4599-42",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "New Power Banks Price السعر جديد شواحن محمولة",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685850,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-af4f84e1-4599-42",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4133845,
                            "objectID": 4133845,
                            "userExternalID": "db884814-ebc4-4991-850a-8f80f39cca3d",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765391165664943E9,
                                    "appliedAt": 1.764181565664943E9,
                                    "productPurchaseId": 846338,
                                    "name": {
                                        "en": "25 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم 25"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766773561069754E9,
                                    "appliedAt": 1.764181561069754E9,
                                    "productPurchaseId": 846336,
                                    "name": {
                                        "en": "400 Listings to be used for 30 Days",
                                        "ar": "400 Listings to be used for 30 Days"
                                    }
                                }
                            },
                            "title": "Apple iPhone 17 Pro Max 256GB 1 SIM UK (2 Years Warranty)",
                            "title_l1": "Apple iPhone 17 Pro Max 256GB 1 SIM UK (2 Years Warranty)",
                            "description": "6.9″ LTPO Super Retina XDR OLED, 120Hz\niOS 26\nApple A19 Pro\n12GB RAM\n256GB Storage\n48MP+48MP+48MP Triple Camera\nSIM + eSIM (8 or more, max 2 at a time )\n5088mAh Battery\nWired & 25W Wireless Charging\nIP68 Water Resistance (6m)\nFace ID\nCeramic Shield 2\nABM 2 Years Warranty",
                            "description_l1": "6.9″ LTPO Super Retina XDR OLED, 120Hz\niOS 26\nApple A19 Pro\n12GB RAM\n256GB Storage\n48MP+48MP+48MP Triple Camera\nSIM + eSIM (8 or more, max 2 at a time )\n5088mAh Battery\nWired & 25W Wireless Charging\nIP68 Water Resistance (6m)\nFace ID\nCeramic Shield 2\nABM 2 Years Warranty",
                            "externalID": "116678199",
                            "slug": "apple-iphone-17-pro-max-256gb-1-sim-uk-2-years-warranty",
                            "slug_l1": "apple-iphone-17-pro-max-256gb-1-sim-uk-2-years-warranty",
                            "createdAt": 1.764181561071576E9,
                            "updatedAt": 1.764182608896047E9,
                            "extraFields": {
                                "make": "2",
                                "model": "17-pro-max",
                                "price": 1560,
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 544,
                                "objectID": 544,
                                "name": "Star Call",
                                "name_l1": "Star Call",
                                "externalID": "627",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 14998947,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14998947/1b09fc6ea66b4b6ca836c22726799620"
                                },
                                "slug": "StarCall-627",
                                "slug_l1": "StarCall-627",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-06-15T10:56:03+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Starcall Mar elies "
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "17 Pro Max",
                                    "formattedValue_l1": "آيفون 17 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,560",
                                    "formattedValue_l1": "1,560"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764872765664943E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15629633,
                                "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-10132871-bd68-45",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "17 Pro Max Apple New Price آيفون 17 برو ماكس أبل السعر جديد",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15629633,
                                    "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-10132871-bd68-45",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15629634,
                                    "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-bce5fe3a-f773-49",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145085,
                            "objectID": 4145085,
                            "userExternalID": "85391818-6d63-4790-8f05-c08d35b17f70",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "ad_limit_bump": {
                                    "expiresAt": 1.767464590731102E9,
                                    "appliedAt": 1.764872590731102E9,
                                    "productPurchaseId": 851034,
                                    "name": {
                                        "en": "Offline - 80 Listings",
                                        "ar": "Offline - 80 Listings"
                                    }
                                }
                            },
                            "title": "Powerbeats pro spring yellow",
                            "title_l1": "Powerbeats pro spring yellow",
                            "description": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "description_l1": "Delivery avaliable, for more information please call:\n01-818596/ 597/598 81-672136,81-638891",
                            "externalID": "116689439",
                            "slug": "powerbeats-pro-spring-yellow",
                            "slug_l1": "powerbeats-pro-spring-yellow",
                            "createdAt": 1.764872590732712E9,
                            "updatedAt": 1.764872594665637E9,
                            "extraFields": {
                                "price": 143,
                                "new_used": "1",
                                "price_type": "price",
                                "accessory_type": "2",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 345,
                                "objectID": 345,
                                "name": "Classic Phone",
                                "name_l1": "Classic Phone",
                                "externalID": "378",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 11724087,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/11724087/7f2b972868b746b6812e38cce40388b6"
                                },
                                "slug": "classic-phone-378",
                                "slug_l1": "classic-phone-378",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "enable_pro_agency_model",
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2020-11-06T12:11:49+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Classic Phone"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "143",
                                    "formattedValue_l1": "143"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Earphones & Bluetooth headsets",
                                    "formattedValue_l1": "سماعات أذن و بلوتوث"
                                }
                            ],
                            "timestamp": 1.764872590732712E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15685849,
                                "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-d55df6e6-4f46-4b",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Earphones & Bluetooth headsets New Price السعر جديد سماعات أذن و بلوتوث",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685849,
                                    "externalID": "85391818-6d63-4790-8f05-c08d35b17f70-d55df6e6-4f46-4b",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4133819,
                            "objectID": 4133819,
                            "userExternalID": "db884814-ebc4-4991-850a-8f80f39cca3d",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765390309981105E9,
                                    "appliedAt": 1.764180709981105E9,
                                    "productPurchaseId": 846338,
                                    "name": {
                                        "en": "25 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم 25"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.766772705429771E9,
                                    "appliedAt": 1.764180705429771E9,
                                    "productPurchaseId": 846336,
                                    "name": {
                                        "en": "400 Listings to be used for 30 Days",
                                        "ar": "400 Listings to be used for 30 Days"
                                    }
                                }
                            },
                            "title": "Samsung Galaxy Tab A11+ 128GB 5G",
                            "title_l1": "Samsung Galaxy Tab A11+ 128GB 5G",
                            "description": "11.0″ TFT LCD, 90Hz\nAndroid 16, One UI 8\nDimensity 7300\n6GB RAM\n128GB Storage\n8MP Rear Camera\n5MP Selfie Camera\n7040mAh Battery\n25W Wired Charging\nQuad Dolby Atmos Speakers\n3.5mm Jack\n1 year Warranty",
                            "description_l1": "11.0″ TFT LCD, 90Hz\nAndroid 16, One UI 8\nDimensity 7300\n6GB RAM\n128GB Storage\n8MP Rear Camera\n5MP Selfie Camera\n7040mAh Battery\n25W Wired Charging\nQuad Dolby Atmos Speakers\n3.5mm Jack\n1 year Warranty",
                            "externalID": "116678173",
                            "slug": "samsung-galaxy-tab-a11-128gb-5g",
                            "slug_l1": "samsung-galaxy-tab-a11-128gb-5g",
                            "createdAt": 1.764180705431174E9,
                            "updatedAt": 1.764180710875408E9,
                            "extraFields": {
                                "make": "11",
                                "price": 285,
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 544,
                                "objectID": 544,
                                "name": "Star Call",
                                "name_l1": "Star Call",
                                "externalID": "627",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 14998947,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14998947/1b09fc6ea66b4b6ca836c22726799620"
                                },
                                "slug": "StarCall-627",
                                "slug_l1": "StarCall-627",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-06-15T10:56:03+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Starcall Mar elies "
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "285",
                                    "formattedValue_l1": "285"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764871909981105E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15629541,
                                "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-a2f62652-ab43-49",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "New Price Samsung السعر جديد سامسونج",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15629541,
                                    "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-a2f62652-ab43-49",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4093305,
                            "objectID": 4093305,
                            "userExternalID": "2c39b94d-bc0d-4cd8-8d21-3ef78cb97e3e",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.83368,
                                "lng": 35.54408
                            },
                            "geo_point": [
                                35.54408,
                                33.83368
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "17 pro max 512 eSIM",
                            "title_l1": "17 pro max 512 eSIM",
                            "description": "without customs \n512\norange\ncycle 50\nfinal price",
                            "description_l1": "without customs \n512\norange\ncycle 50\nfinal price",
                            "externalID": "116637657",
                            "slug": "17-pro-max-512-esim",
                            "slug_l1": "17-pro-max-512-esim",
                            "createdAt": 1.764871409465586E9,
                            "updatedAt": 1.764871411137516E9,
                            "extraFields": {
                                "make": "2",
                                "color": "11",
                                "model": "17-pro-max",
                                "price": 1475,
                                "video": "no",
                                "storage": "5",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number"
                                ],
                                "name": "User 6mA66P"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Orange",
                                    "formattedValue_l1": "برتقالي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "17 Pro Max",
                                    "formattedValue_l1": "آيفون 17 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,475",
                                    "formattedValue_l1": "1,475"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764871409465586E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15420808,
                                "externalID": "2c39b94d-bc0d-4cd8-8d21-3ef78cb97e3e-2ebc6e84-7991-44",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "17 Pro Max 512 GB 512 جيجابايت Apple Individual Orange Price Used آيفون 17 برو ماكس أبل السعر برتقالي فرد مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 242,
                                "level": 2,
                                "externalID": "2-312",
                                "name": "Baabda Town",
                                "name_l1": "بلدة بعبدا",
                                "slug": "baabda-town",
                                "slug_l1": "baabda-town"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 242,
                                    "level": 2,
                                    "externalID": "2-312",
                                    "name": "Baabda Town",
                                    "name_l1": "بلدة بعبدا",
                                    "slug": "baabda-town",
                                    "slug_l1": "baabda-town"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15420808,
                                    "externalID": "2c39b94d-bc0d-4cd8-8d21-3ef78cb97e3e-2ebc6e84-7991-44",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 330556,
                            "objectID": 330556,
                            "userExternalID": "00fd7211-b5ae-4181-8811-c4a55dcd461a",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.87972,
                                "lng": 35.57399
                            },
                            "geo_point": [
                                35.57399,
                                33.87972
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "FERRARI T150 earphones",
                            "title_l1": "FERRARI T150 earphones",
                            "description": "Brand new Ferrari T150 earphones special edition",
                            "description_l1": "Brand new Ferrari T150 earphones special edition",
                            "externalID": "111463824",
                            "slug": "ferrari-t150-earphones",
                            "slug_l1": "ferrari-t150-earphones",
                            "createdAt": 1.764871244210191E9,
                            "updatedAt": 1.764871312264163E9,
                            "extraFields": {
                                "make": "18",
                                "price": 70,
                                "video": "no",
                                "new_used": "1",
                                "price_type": "arranged",
                                "deliverable": "no",
                                "seller_type": "1",
                                "accessory_type": "2",
                                "secondary_price": 6300000,
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Elie"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Other brands",
                                    "formattedValue_l1": "ماركة اخرى"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "70",
                                    "formattedValue_l1": "70"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Negotiable",
                                    "formattedValue_l1": "قابل للنقاش"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                },
                                {
                                    "name": "Item Type",
                                    "name_l1": "نوع الغرض",
                                    "attribute": "accessory_type",
                                    "formattedValue": "Earphones & Bluetooth headsets",
                                    "formattedValue_l1": "سماعات أذن و بلوتوث"
                                },
                                {
                                    "name": "LL",
                                    "name_l1": "السعر بالليرة",
                                    "attribute": "secondary_price",
                                    "formattedValue": "6,300,000",
                                    "formattedValue_l1": "6,300,000"
                                }
                            ],
                            "timestamp": 1.764871244210191E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 1303852,
                                "externalID": "45883247",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 3,
                            "keywords": "Earphones & Bluetooth headsets Individual Negotiable New Other brands جديد سماعات أذن و بلوتوث فرد قابل للنقاش ماركة اخرى",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 21,
                                "level": 1,
                                "externalID": "1-68",
                                "name": "Metn",
                                "name_l1": "المتن",
                                "slug": "metn",
                                "slug_l1": "metn"
                            },
                            "location.lvl2": {
                                "id": 407,
                                "level": 2,
                                "externalID": "2-84",
                                "name": "Fanar",
                                "name_l1": "فنار",
                                "slug": "fanar",
                                "slug_l1": "fanar"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 21,
                                    "level": 1,
                                    "externalID": "1-68",
                                    "name": "Metn",
                                    "name_l1": "المتن",
                                    "slug": "metn",
                                    "slug_l1": "metn"
                                },
                                {
                                    "id": 407,
                                    "level": 2,
                                    "externalID": "2-84",
                                    "name": "Fanar",
                                    "name_l1": "فنار",
                                    "slug": "fanar",
                                    "slug_l1": "fanar"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 71,
                                "level": 1,
                                "externalID": "148",
                                "name": "Mobile Accessories",
                                "name_l1": "اكسسورات موبايلات",
                                "slug": "mobile-accessories",
                                "slug_l1": "mobile-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Accessory",
                                "nameSingular_l1": "Mobile Accessory"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 71,
                                    "level": 1,
                                    "externalID": "148",
                                    "name": "Mobile Accessories",
                                    "name_l1": "اكسسورات موبايلات",
                                    "slug": "mobile-accessories",
                                    "slug_l1": "mobile-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Accessory",
                                    "nameSingular_l1": "Mobile Accessory"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 1303852,
                                    "externalID": "45883247",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 1303855,
                                    "externalID": "45883248",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 1303861,
                                    "externalID": "45883249",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145045,
                            "objectID": 4145045,
                            "userExternalID": "7461fe9c-5b39-419d-89a7-ddd492523348",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.27216,
                                "lng": 35.20328
                            },
                            "geo_point": [
                                35.20328,
                                33.27216
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "Honor 9x lite 128gb",
                            "title_l1": "Honor 9x lite 128gb",
                            "description": "تليفون كتير نضيف شغال ١٠٠٪؜ 128gb \nللتواصل ٧٠٥١١٠٤٤",
                            "description_l1": "تليفون كتير نضيف شغال ١٠٠٪؜ 128gb \nللتواصل ٧٠٥١١٠٤٤",
                            "externalID": "116689399",
                            "slug": "honor-9x-lite-128gb",
                            "slug_l1": "honor-9x-lite-128gb",
                            "createdAt": 1.764871086704749E9,
                            "updatedAt": 1.764871118158861E9,
                            "extraFields": {
                                "make": "22",
                                "color": "3",
                                "model": "9x-lite",
                                "price": 75,
                                "storage": "3",
                                "new_used": "2",
                                "price_type": "arranged",
                                "secondary_price": 6700,
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Bob"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Honor",
                                    "formattedValue_l1": "هونور"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Blue",
                                    "formattedValue_l1": "أزرق"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "9X Lite",
                                    "formattedValue_l1": "اكس 9 لايت"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "75",
                                    "formattedValue_l1": "75"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Negotiable",
                                    "formattedValue_l1": "قابل للنقاش"
                                },
                                {
                                    "name": "LL",
                                    "name_l1": "السعر بالليرة",
                                    "attribute": "secondary_price",
                                    "formattedValue": "6,700",
                                    "formattedValue_l1": "6,700"
                                }
                            ],
                            "timestamp": 1.764871086704749E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685660,
                                "externalID": "7461fe9c-5b39-419d-89a7-ddd492523348-d5113dcc-3c3f-4a",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 4,
                            "keywords": "128 GB 128 جيجابايت 9X Lite Blue Honor Negotiable Used أزرق اكس 9 لايت قابل للنقاش مستعمل هونور",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 25,
                                "level": 1,
                                "externalID": "1-72",
                                "name": "Tyre",
                                "name_l1": "صور",
                                "slug": "tyre",
                                "slug_l1": "tyre"
                            },
                            "location.lvl2": {
                                "id": 510,
                                "level": 2,
                                "externalID": "2-23",
                                "name": "Other in Tyre",
                                "name_l1": "مدن أخرى في صور",
                                "slug": "other-tyre",
                                "slug_l1": "other-tyre"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 25,
                                    "level": 1,
                                    "externalID": "1-72",
                                    "name": "Tyre",
                                    "name_l1": "صور",
                                    "slug": "tyre",
                                    "slug_l1": "tyre"
                                },
                                {
                                    "id": 510,
                                    "level": 2,
                                    "externalID": "2-23",
                                    "name": "Other in Tyre",
                                    "name_l1": "مدن أخرى في صور",
                                    "slug": "other-tyre",
                                    "slug_l1": "other-tyre"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685660,
                                    "externalID": "7461fe9c-5b39-419d-89a7-ddd492523348-d5113dcc-3c3f-4a",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685661,
                                    "externalID": "7461fe9c-5b39-419d-89a7-ddd492523348-79cc068c-e4e6-43",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685662,
                                    "externalID": "7461fe9c-5b39-419d-89a7-ddd492523348-131c6334-5498-45",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685663,
                                    "externalID": "7461fe9c-5b39-419d-89a7-ddd492523348-b15007bc-20b3-4d",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4055567,
                            "objectID": 4055567,
                            "userExternalID": "9218ed8e-efb9-44ac-86fb-06a984b446da",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.8803,
                                "lng": 35.50419
                            },
                            "geo_point": [
                                35.50419,
                                33.8803
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "IPhone XS - 64gbs - Gold (Very good condition)",
                            "title_l1": "IPhone XS - 64gbs - Gold (Very good condition)",
                            "description": "IPhone XS used in very good condition\nZero Scratches\n64gbs Storage\nWith original box and apple adapter\none owner\nStill like new",
                            "description_l1": "IPhone XS used in very good condition\nZero Scratches\n64gbs Storage\nWith original box and apple adapter\none owner\nStill like new",
                            "externalID": "116599918",
                            "slug": "iphone-xs-64gbs-gold-very-good-condition",
                            "slug_l1": "iphone-xs-64gbs-gold-very-good-condition",
                            "createdAt": 1.764871075180028E9,
                            "updatedAt": 1.764871078603494E9,
                            "extraFields": {
                                "make": "2",
                                "color": "5",
                                "model": "xs",
                                "price": 140,
                                "video": "no",
                                "storage": "2",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Bk"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Gold",
                                    "formattedValue_l1": "ذهبي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "XS",
                                    "formattedValue_l1": "اكس اس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "140",
                                    "formattedValue_l1": "140"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "64 GB",
                                    "formattedValue_l1": "64 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764871075180028E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15222666,
                                "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-ed982979-f242-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 20,
                            "keywords": "64 GB 64 جيجابايت Apple Gold Individual Price Used XS أبل اكس اس السعر ذهبي فرد مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 49,
                                "level": 2,
                                "externalID": "2-179",
                                "name": "Mazraa",
                                "name_l1": "مزرعة",
                                "slug": "mazraa",
                                "slug_l1": "mazraa"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 49,
                                    "level": 2,
                                    "externalID": "2-179",
                                    "name": "Mazraa",
                                    "name_l1": "مزرعة",
                                    "slug": "mazraa",
                                    "slug_l1": "mazraa"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15222666,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-ed982979-f242-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222667,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-57243f13-9c10-4d",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222668,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-9287b98e-42a7-41",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222669,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-12539383-3d00-4d",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222670,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-472f2731-e329-47",
                                    "title": null,
                                    "orderIndex": 4,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222671,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-fa4c8f13-3f90-4e",
                                    "title": null,
                                    "orderIndex": 5,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222672,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-457c3b7c-9955-4a",
                                    "title": null,
                                    "orderIndex": 6,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222673,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-88bbdcee-ca12-47",
                                    "title": null,
                                    "orderIndex": 7,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222674,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-98a7ac5d-4c58-43",
                                    "title": null,
                                    "orderIndex": 8,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222675,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-36b3d4ae-7793-41",
                                    "title": null,
                                    "orderIndex": 9,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222676,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-d2ba6753-5d94-44",
                                    "title": null,
                                    "orderIndex": 10,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222677,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-0e9170f2-eaf0-44",
                                    "title": null,
                                    "orderIndex": 11,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222678,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-1ecdf058-d56a-4e",
                                    "title": null,
                                    "orderIndex": 12,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222679,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-7c131a39-1087-4f",
                                    "title": null,
                                    "orderIndex": 13,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222680,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-4212332e-e7b0-4d",
                                    "title": null,
                                    "orderIndex": 14,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222681,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-9841b6f2-e1ef-4e",
                                    "title": null,
                                    "orderIndex": 15,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222682,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-ff05426e-fc32-46",
                                    "title": null,
                                    "orderIndex": 16,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222683,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-8bbb7218-fd62-4c",
                                    "title": null,
                                    "orderIndex": 17,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222684,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-60212d94-f1bc-4a",
                                    "title": null,
                                    "orderIndex": 18,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15222685,
                                    "externalID": "9218ed8e-efb9-44ac-86fb-06a984b446da-7dce2524-99dc-46",
                                    "title": null,
                                    "orderIndex": 19,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4088978,
                            "objectID": 4088978,
                            "userExternalID": "7307459a-bf68-4c86-8096-ab1b4376a913",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.89798,
                                "lng": 35.4901
                            },
                            "geo_point": [
                                35.4901,
                                33.89798
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "iphone 15 promax 512 gb",
                            "title_l1": "iphone 15 promax 512 gb",
                            "description": "very clean iphone 15 promax titanium silver capacity 512 gb",
                            "description_l1": "very clean iphone 15 promax titanium silver capacity 512 gb",
                            "externalID": "116633330",
                            "slug": "iphone-15-promax-512-gb",
                            "slug_l1": "iphone-15-promax-512-gb",
                            "createdAt": 1.764870754031938E9,
                            "updatedAt": 1.764870755011533E9,
                            "extraFields": {
                                "make": "2",
                                "color": "7",
                                "model": "15-pro-max",
                                "price": 900,
                                "video": "no",
                                "storage": "5",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number"
                                ],
                                "name": "Ra"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Silver",
                                    "formattedValue_l1": "فضي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "15 Pro Max",
                                    "formattedValue_l1": "15 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "900",
                                    "formattedValue_l1": "900"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764870754031938E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15397712,
                                "externalID": "7307459a-bf68-4c86-8096-ab1b4376a913-e76cdace-791e-43",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "15 Pro Max 15 برو ماكس 512 GB 512 جيجابايت Apple Individual Price Silver Used أبل السعر فرد فضي مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 53,
                                "level": 2,
                                "externalID": "2-223",
                                "name": "Clemenceau",
                                "name_l1": "كليمنصو",
                                "slug": "clemenceau",
                                "slug_l1": "clemenceau"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 53,
                                    "level": 2,
                                    "externalID": "2-223",
                                    "name": "Clemenceau",
                                    "name_l1": "كليمنصو",
                                    "slug": "clemenceau",
                                    "slug_l1": "clemenceau"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15397712,
                                    "externalID": "7307459a-bf68-4c86-8096-ab1b4376a913-e76cdace-791e-43",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 3957965,
                            "objectID": 3957965,
                            "userExternalID": "a4e551d5-bc22-4ea2-8cc7-891a5c074c3f",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 34.39632,
                                "lng": 35.89584
                            },
                            "geo_point": [
                                35.89584,
                                34.39632
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "alfa prepaid number",
                            "title_l1": "alfa prepaid number",
                            "description": "81 117 456\nprepaid alfa number",
                            "description_l1": "81 117 456\nprepaid alfa number",
                            "externalID": "116502316",
                            "slug": "alfa-prepaid-number",
                            "slug_l1": "alfa-prepaid-number",
                            "createdAt": 1.764869483875542E9,
                            "updatedAt": 1.764869484889961E9,
                            "extraFields": {
                                "price": 120,
                                "video": "no",
                                "operator": "2",
                                "membership": "1",
                                "price_type": "price",
                                "seller_type": "1",
                                "deliverable": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Antonio saba"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "120",
                                    "formattedValue_l1": "120"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Operator",
                                    "name_l1": "الشركة المشغلة",
                                    "attribute": "operator",
                                    "formattedValue": "Alfa",
                                    "formattedValue_l1": "Alfa"
                                },
                                {
                                    "name": "Membership Type",
                                    "name_l1": "نوع الإشتراك",
                                    "attribute": "membership",
                                    "formattedValue": "Prepaid",
                                    "formattedValue_l1": "خطوط المسبقة الدفع"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764869483875542E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 14739808,
                                "externalID": "a4e551d5-bc22-4ea2-8cc7-891a5c074c3f-a4d3c122-4229-40",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Alfa Individual Prepaid Price السعر خطوط المسبقة الدفع فرد",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 27,
                                "level": 1,
                                "externalID": "1-74",
                                "name": "Zgharta",
                                "name_l1": "زغرتا",
                                "slug": "zghorta",
                                "slug_l1": "zghorta"
                            },
                            "location.lvl2": {
                                "id": 521,
                                "level": 2,
                                "externalID": "2-25",
                                "name": "Other in Zgharta",
                                "name_l1": "مدن أخرى في زغرتا",
                                "slug": "other-zghorta",
                                "slug_l1": "other-zghorta"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 27,
                                    "level": 1,
                                    "externalID": "1-74",
                                    "name": "Zgharta",
                                    "name_l1": "زغرتا",
                                    "slug": "zghorta",
                                    "slug_l1": "zghorta"
                                },
                                {
                                    "id": 521,
                                    "level": 2,
                                    "externalID": "2-25",
                                    "name": "Other in Zgharta",
                                    "name_l1": "مدن أخرى في زغرتا",
                                    "slug": "other-zghorta",
                                    "slug_l1": "other-zghorta"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 72,
                                "level": 1,
                                "externalID": "323",
                                "name": "Mobile Numbers",
                                "name_l1": "أرقام الهواتف المحمولة",
                                "slug": "mobile-numbers",
                                "slug_l1": "mobile-numbers",
                                "roles": [
                                    "show_phone_number",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Number",
                                "nameSingular_l1": "Mobile Number"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 72,
                                    "level": 1,
                                    "externalID": "323",
                                    "name": "Mobile Numbers",
                                    "name_l1": "أرقام الهواتف المحمولة",
                                    "slug": "mobile-numbers",
                                    "slug_l1": "mobile-numbers",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Number",
                                    "nameSingular_l1": "Mobile Number"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 14739808,
                                    "externalID": "a4e551d5-bc22-4ea2-8cc7-891a5c074c3f-a4d3c122-4229-40",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145016,
                            "objectID": 4145016,
                            "userExternalID": "dcec364d-6c7a-4bbf-830e-c48d27b05ffa",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 34.4149837,
                                "lng": 35.8488948
                            },
                            "geo_point": [
                                35.8488948,
                                34.4149837
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "iphone 16 pro max 512",
                            "title_l1": "iphone 16 pro max 512",
                            "description": "titanium iphone 16 pro max 512\nbattery 97%\nmjamrak\nwith box\nwala jere7",
                            "description_l1": "titanium iphone 16 pro max 512\nbattery 97%\nmjamrak\nwith box\nwala jere7",
                            "externalID": "116689370",
                            "slug": "iphone-15-pro-max-256",
                            "slug_l1": "iphone-16-pro-max-512",
                            "createdAt": 1.764869280557214E9,
                            "updatedAt": 1.76487385800419E9,
                            "extraFields": {
                                "make": "2",
                                "color": "7",
                                "model": "16-pro-max",
                                "price": 1200,
                                "video": "no",
                                "storage": "5",
                                "new_used": "2",
                                "price_type": "arranged",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "dan"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Silver",
                                    "formattedValue_l1": "فضي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "16 Pro Max",
                                    "formattedValue_l1": "16 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,200",
                                    "formattedValue_l1": "1,200"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Negotiable",
                                    "formattedValue_l1": "قابل للنقاش"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764869280557214E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685519,
                                "externalID": "dcec364d-6c7a-4bbf-830e-c48d27b05ffa-d8df7c69-d06b-47",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "16 Pro Max 16 برو ماكس 512 GB 512 جيجابايت Apple Individual Negotiable Silver Used أبل فرد فضي قابل للنقاش مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 27,
                                "level": 1,
                                "externalID": "1-74",
                                "name": "Zgharta",
                                "name_l1": "زغرتا",
                                "slug": "zghorta",
                                "slug_l1": "zghorta"
                            },
                            "location.lvl2": {
                                "id": 522,
                                "level": 2,
                                "externalID": "2-250",
                                "name": "Majdalaya",
                                "name_l1": "مجدليا",
                                "slug": "majdalaya",
                                "slug_l1": "majdalaya"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 27,
                                    "level": 1,
                                    "externalID": "1-74",
                                    "name": "Zgharta",
                                    "name_l1": "زغرتا",
                                    "slug": "zghorta",
                                    "slug_l1": "zghorta"
                                },
                                {
                                    "id": 522,
                                    "level": 2,
                                    "externalID": "2-250",
                                    "name": "Majdalaya",
                                    "name_l1": "مجدليا",
                                    "slug": "majdalaya",
                                    "slug_l1": "majdalaya"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685519,
                                    "externalID": "dcec364d-6c7a-4bbf-830e-c48d27b05ffa-d8df7c69-d06b-47",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145010,
                            "objectID": 4145010,
                            "userExternalID": "3be29e00-cf2a-4e5c-8e17-8791fbaf47e2",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.89166,
                                "lng": 35.48983
                            },
                            "geo_point": [
                                35.48983,
                                33.89166
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "samsung a32",
                            "title_l1": "samsung a32",
                            "description": "Samsung a32\n128gb/6gb\nGood condition with box شعر بسيط بالشاشة بس شغالة 100%\n70$",
                            "description_l1": "Samsung a32\n128gb/6gb\nGood condition with box شعر بسيط بالشاشة بس شغالة 100%\n70$",
                            "externalID": "116689364",
                            "slug": "samsung-a32",
                            "slug_l1": "samsung-a32",
                            "createdAt": 1.76486913373794E9,
                            "updatedAt": 1.764873156555664E9,
                            "extraFields": {
                                "make": "11",
                                "color": "2",
                                "model": "a32",
                                "price": 70,
                                "video": "no",
                                "storage": "3",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "OLX User js"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "A32",
                                    "formattedValue_l1": "ايه 32"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "70",
                                    "formattedValue_l1": "70"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.76486913373794E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685490,
                                "externalID": "3be29e00-cf2a-4e5c-8e17-8791fbaf47e2-0b9a5458-cb17-47",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 3,
                            "keywords": "128 GB 128 جيجابايت A32 Black Individual Price Samsung Used أسود السعر ايه 32 سامسونج فرد مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 37,
                                "level": 2,
                                "externalID": "2-95",
                                "name": "Sanayeh",
                                "name_l1": "صنايع",
                                "slug": "sanayeh",
                                "slug_l1": "sanayeh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 37,
                                    "level": 2,
                                    "externalID": "2-95",
                                    "name": "Sanayeh",
                                    "name_l1": "صنايع",
                                    "slug": "sanayeh",
                                    "slug_l1": "sanayeh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685490,
                                    "externalID": "3be29e00-cf2a-4e5c-8e17-8791fbaf47e2-0b9a5458-cb17-47",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685491,
                                    "externalID": "3be29e00-cf2a-4e5c-8e17-8791fbaf47e2-d8b9f6a3-0783-4a",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685492,
                                    "externalID": "3be29e00-cf2a-4e5c-8e17-8791fbaf47e2-7df95367-b6d2-48",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145004,
                            "objectID": 4145004,
                            "userExternalID": "af1a1e1f-2093-467a-8fe9-9baf87ad51b5",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 34.43909,
                                "lng": 35.83721
                            },
                            "geo_point": [
                                35.83721,
                                34.43909
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "iphone 11 pro 256 gb  210$",
                            "title_l1": "iphone 11 pro 256 gb  210$",
                            "description": "iphone 11 pro 256gb 210$",
                            "description_l1": "iphone 11 pro 256gb 210$",
                            "externalID": "116689358",
                            "slug": "iphone-11-pro-256-gb-210",
                            "slug_l1": "iphone-11-pro-256-gb-210",
                            "createdAt": 1.764868775720988E9,
                            "updatedAt": 1.764868784575786E9,
                            "extraFields": {
                                "make": "2",
                                "color": "2",
                                "model": "11-pro",
                                "price": 210,
                                "storage": "4",
                                "new_used": "2",
                                "price_type": "price",
                                "secondary_price": 210,
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "hhhh"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "11 Pro",
                                    "formattedValue_l1": "11 برو"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "210",
                                    "formattedValue_l1": "210"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "256 GB",
                                    "formattedValue_l1": "256 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "LL",
                                    "name_l1": "السعر بالليرة",
                                    "attribute": "secondary_price",
                                    "formattedValue": "210",
                                    "formattedValue_l1": "210"
                                }
                            ],
                            "timestamp": 1.764868775720988E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685467,
                                "externalID": "af1a1e1f-2093-467a-8fe9-9baf87ad51b5-59d590ee-d626-45",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "11 Pro 11 برو 256 GB 256 جيجابايت Apple Black Price Used أبل أسود السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 3,
                                "level": 1,
                                "externalID": "1-50",
                                "name": "Tripoli",
                                "name_l1": "طرابلس",
                                "slug": "tripoli",
                                "slug_l1": "tripoli"
                            },
                            "location.lvl2": {
                                "id": 107,
                                "level": 2,
                                "externalID": "2-37",
                                "name": "Azmi",
                                "name_l1": "عزمي",
                                "slug": "azmi",
                                "slug_l1": "azmi"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 3,
                                    "level": 1,
                                    "externalID": "1-50",
                                    "name": "Tripoli",
                                    "name_l1": "طرابلس",
                                    "slug": "tripoli",
                                    "slug_l1": "tripoli"
                                },
                                {
                                    "id": 107,
                                    "level": 2,
                                    "externalID": "2-37",
                                    "name": "Azmi",
                                    "name_l1": "عزمي",
                                    "slug": "azmi",
                                    "slug_l1": "azmi"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685467,
                                    "externalID": "af1a1e1f-2093-467a-8fe9-9baf87ad51b5-59d590ee-d626-45",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4055592,
                            "objectID": 4055592,
                            "userExternalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.8045,
                                "lng": 35.5887
                            },
                            "geo_point": [
                                35.5887,
                                33.8045
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "Apple watch ultra 2 Black",
                            "title_l1": "Apple watch ultra 2 Black",
                            "description": "Apple watch ultra 2 black\nWith Box and Charger cable",
                            "description_l1": "Apple watch ultra 2 black\nWith Box and Charger cable",
                            "externalID": "116599943",
                            "slug": "apple-watch-ultra-1",
                            "slug_l1": "apple-watch-ultra-2-black",
                            "createdAt": 1.764868556142524E9,
                            "updatedAt": 1.764868892132121E9,
                            "extraFields": {
                                "make": "1",
                                "size": "7",
                                "price": 550,
                                "video": "no",
                                "storage": "4",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "band_material": "7",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "Buyer"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Size",
                                    "name_l1": "الحجم",
                                    "attribute": "size",
                                    "formattedValue": "50 mm",
                                    "formattedValue_l1": "50 ملم"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "550",
                                    "formattedValue_l1": "550"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "Other",
                                    "formattedValue_l1": "أخرى"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                },
                                {
                                    "name": "Band material",
                                    "name_l1": "مادة السوار",
                                    "attribute": "band_material",
                                    "formattedValue": "Other",
                                    "formattedValue_l1": "أخرى"
                                }
                            ],
                            "timestamp": 1.764868556142524E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685445,
                                "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-6e9056f7-c7ce-41",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 9,
                            "keywords": "50 mm 50 ملم Apple Individual Other Price Used أبل أخرى السعر فرد مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 51,
                                "level": 2,
                                "externalID": "2-192",
                                "name": "Ain El Remmaneh",
                                "name_l1": "عين الرمانة",
                                "slug": "ain-el-remmaneh",
                                "slug_l1": "ain-el-remmaneh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 51,
                                    "level": 2,
                                    "externalID": "2-192",
                                    "name": "Ain El Remmaneh",
                                    "name_l1": "عين الرمانة",
                                    "slug": "ain-el-remmaneh",
                                    "slug_l1": "ain-el-remmaneh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 73,
                                "level": 1,
                                "externalID": "324",
                                "name": "Smart Watches",
                                "name_l1": "الساعات الذكية",
                                "slug": "smart-watches",
                                "slug_l1": "smart-watches",
                                "roles": [
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Smart Watche",
                                "nameSingular_l1": "Smart Watche"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 73,
                                    "level": 1,
                                    "externalID": "324",
                                    "name": "Smart Watches",
                                    "name_l1": "الساعات الذكية",
                                    "slug": "smart-watches",
                                    "slug_l1": "smart-watches",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Smart Watche",
                                    "nameSingular_l1": "Smart Watche"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685445,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-6e9056f7-c7ce-41",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685446,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-d9cddd0f-f4c2-48",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685447,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-3bcbac8b-54b3-4f",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685448,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-0006b825-c78d-4c",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685449,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-dad93c4d-3ef2-49",
                                    "title": null,
                                    "orderIndex": 4,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685450,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-23f0f3cf-20cb-42",
                                    "title": null,
                                    "orderIndex": 5,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685451,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-3350912e-27bb-44",
                                    "title": null,
                                    "orderIndex": 6,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685452,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-8bd3c801-6834-40",
                                    "title": null,
                                    "orderIndex": 7,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685453,
                                    "externalID": "d710952d-fa7c-4502-96b5-0fcb6b6df517-fe448bdd-2afb-45",
                                    "title": null,
                                    "orderIndex": 8,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4145000,
                            "objectID": 4145000,
                            "userExternalID": "54d12caf-6ba4-4a1d-8ea1-aa0db8d7d1cc",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.91885,
                                "lng": 35.60801
                            },
                            "geo_point": [
                                35.60801,
                                33.91885
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "iphone 7 plus - 128GB",
                            "title_l1": "iphone 7 plus - 128GB",
                            "description": "original screen, no scratches at all like brand new, excellent battery, excellent condition",
                            "description_l1": "original screen, no scratches at all like brand new, excellent battery, excellent condition",
                            "externalID": "116689354",
                            "slug": "iphone-7-plus-128gb",
                            "slug_l1": "iphone-7-plus-128gb",
                            "createdAt": 1.764868447367692E9,
                            "updatedAt": 1.764868523622923E9,
                            "extraFields": {
                                "make": "2",
                                "color": "4",
                                "model": "7-plus",
                                "price": 70,
                                "video": "no",
                                "storage": "3",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Th"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Pink",
                                    "formattedValue_l1": "وردي"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "7 Plus",
                                    "formattedValue_l1": "7 بلس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "70",
                                    "formattedValue_l1": "70"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "128 GB",
                                    "formattedValue_l1": "128 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.764868447367692E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685442,
                                "externalID": "54d12caf-6ba4-4a1d-8ea1-aa0db8d7d1cc-e75643ba-5b96-42",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "128 GB 128 جيجابايت 7 Plus 7 بلس Apple Individual Pink Price Used أبل السعر فرد مستعمل وردي",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 21,
                                "level": 1,
                                "externalID": "1-68",
                                "name": "Metn",
                                "name_l1": "المتن",
                                "slug": "metn",
                                "slug_l1": "metn"
                            },
                            "location.lvl2": {
                                "id": 431,
                                "level": 2,
                                "externalID": "2-184",
                                "name": "Rabweh",
                                "name_l1": "ربوة",
                                "slug": "rabweh",
                                "slug_l1": "rabweh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 21,
                                    "level": 1,
                                    "externalID": "1-68",
                                    "name": "Metn",
                                    "name_l1": "المتن",
                                    "slug": "metn",
                                    "slug_l1": "metn"
                                },
                                {
                                    "id": 431,
                                    "level": 2,
                                    "externalID": "2-184",
                                    "name": "Rabweh",
                                    "name_l1": "ربوة",
                                    "slug": "rabweh",
                                    "slug_l1": "rabweh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685442,
                                    "externalID": "54d12caf-6ba4-4a1d-8ea1-aa0db8d7d1cc-e75643ba-5b96-42",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685444,
                                    "externalID": "54d12caf-6ba4-4a1d-8ea1-aa0db8d7d1cc-0601e232-7ad4-4d",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4140529,
                            "objectID": 4140529,
                            "userExternalID": "db884814-ebc4-4991-850a-8f80f39cca3d",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.88863,
                                "lng": 35.49548
                            },
                            "geo_point": [
                                35.49548,
                                33.88863
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765818725734894E9,
                                    "appliedAt": 1.764609125734894E9,
                                    "productPurchaseId": 846338,
                                    "name": {
                                        "en": "25 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم 25"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767201121564501E9,
                                    "appliedAt": 1.764609121564501E9,
                                    "productPurchaseId": 846336,
                                    "name": {
                                        "en": "400 Listings to be used for 30 Days",
                                        "ar": "400 Listings to be used for 30 Days"
                                    }
                                }
                            },
                            "title": "Samsung Galaxy S25 Ultra 512GB",
                            "title_l1": "Samsung Galaxy S25 Ultra 512GB",
                            "description": "6.9″ Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)\nAndroid 15, up to 7 major Android upgrades, One UI 7\nCorning Gorilla Armor 2\nSnapdragon 8 Elite (3 nm)\n12GB RAM + 512GB\nQuad Camera 200MP + 50MP + 50MP + 10MP\nSelfie Camera 12MP\n5000mAh Battery\n45W Wired, 25W Wireless Charging\n1 Year Warranty\n1 Year Screen Warranty",
                            "description_l1": "6.9″ Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)\nAndroid 15, up to 7 major Android upgrades, One UI 7\nCorning Gorilla Armor 2\nSnapdragon 8 Elite (3 nm)\n12GB RAM + 512GB\nQuad Camera 200MP + 50MP + 50MP + 10MP\nSelfie Camera 12MP\n5000mAh Battery\n45W Wired, 25W Wireless Charging\n1 Year Warranty\n1 Year Screen Warranty",
                            "externalID": "116684883",
                            "slug": "samsung-galaxy-s25-ultra-512gb",
                            "slug_l1": "samsung-galaxy-s25-ultra-512gb",
                            "createdAt": 1.764609121566498E9,
                            "updatedAt": 1.764610548300656E9,
                            "extraFields": {
                                "make": "11",
                                "model": "s25-ultra",
                                "price": 1145,
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 544,
                                "objectID": 544,
                                "name": "Star Call",
                                "name_l1": "Star Call",
                                "externalID": "627",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 14998947,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14998947/1b09fc6ea66b4b6ca836c22726799620"
                                },
                                "slug": "StarCall-627",
                                "slug_l1": "StarCall-627",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-06-15T10:56:03+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Starcall Mar elies "
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "S25 Ultra",
                                    "formattedValue_l1": "اس 25 الترا"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,145",
                                    "formattedValue_l1": "1,145"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764868325734894E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15662721,
                                "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-c1346d20-c6f3-4d",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "New Price S25 Ultra Samsung اس 25 الترا السعر جديد سامسونج",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 34,
                                "level": 2,
                                "externalID": "2-92",
                                "name": "Mar Elias",
                                "name_l1": "مار الياس",
                                "slug": "mar-elias-1",
                                "slug_l1": "mar-elias-1"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 34,
                                    "level": 2,
                                    "externalID": "2-92",
                                    "name": "Mar Elias",
                                    "name_l1": "مار الياس",
                                    "slug": "mar-elias-1",
                                    "slug_l1": "mar-elias-1"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15662721,
                                    "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-c1346d20-c6f3-4d",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15662722,
                                    "externalID": "db884814-ebc4-4991-850a-8f80f39cca3d-a8133a3d-5033-4d",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4144984,
                            "objectID": 4144984,
                            "userExternalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.85289,
                                "lng": 35.51022
                            },
                            "geo_point": [
                                35.51022,
                                33.85289
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "haret hreik",
                            "title_l1": "haret hreik",
                            "description": "iphone 15 promax 512gb used like new \nmjamrak 76763432",
                            "description_l1": "iphone 15 promax 512gb used like new \nmjamrak 76763432",
                            "externalID": "116689338",
                            "slug": "haret-hreik",
                            "slug_l1": "haret-hreik",
                            "createdAt": 1.764867591502175E9,
                            "updatedAt": 1.764867647610714E9,
                            "extraFields": {
                                "make": "2",
                                "color": "1",
                                "model": "15-pro-max",
                                "price": 950,
                                "storage": "5",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "Mohamad"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "White",
                                    "formattedValue_l1": "أبيض"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "15 Pro Max",
                                    "formattedValue_l1": "15 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "950",
                                    "formattedValue_l1": "950"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "512 GB",
                                    "formattedValue_l1": "512 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764867591502175E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685361,
                                "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-5dc58a12-0585-4d",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 8,
                            "keywords": "15 Pro Max 15 برو ماكس 512 GB 512 جيجابايت Apple Price Used White أبل أبيض السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 226,
                                "level": 2,
                                "externalID": "2-70",
                                "name": "Haret Hreik",
                                "name_l1": "حارة حريك",
                                "slug": "haret-hreik",
                                "slug_l1": "haret-hreik"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 226,
                                    "level": 2,
                                    "externalID": "2-70",
                                    "name": "Haret Hreik",
                                    "name_l1": "حارة حريك",
                                    "slug": "haret-hreik",
                                    "slug_l1": "haret-hreik"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685361,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-5dc58a12-0585-4d",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685362,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-a0330921-8327-4d",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685363,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-fbffe445-1964-45",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685364,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-75f0ba29-6f3e-44",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685365,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-f070c2ed-afe3-45",
                                    "title": null,
                                    "orderIndex": 4,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685366,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-b89dad02-959a-46",
                                    "title": null,
                                    "orderIndex": 5,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685367,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-9db740ab-cbb8-47",
                                    "title": null,
                                    "orderIndex": 6,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685368,
                                    "externalID": "ef8b7b3e-c4b2-4e9a-84c0-179bc8349684-e5f9eece-9a56-4d",
                                    "title": null,
                                    "orderIndex": 7,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4126721,
                            "objectID": 4126721,
                            "userExternalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.85534,
                                "lng": 35.53589
                            },
                            "geo_point": [
                                35.53589,
                                33.85534
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.764953435942129E9,
                                    "appliedAt": 1.763743835942129E9,
                                    "productPurchaseId": 848892,
                                    "name": {
                                        "en": "12 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14يوم العدد 12"
                                    }
                                }
                            },
                            "title": "iphone 17 pro max 512G. BH 100%",
                            "title_l1": "iphone 17 pro max 512G. BH 100%",
                            "description": "used like new\ncycle count 40 \nBH 100%\nblue color\ne sim",
                            "description_l1": "used like new\ncycle count 40 \nBH 100%\nblue color\ne sim",
                            "externalID": "116671075",
                            "slug": "iphone-17-pro-max-512g-bh-100",
                            "slug_l1": "iphone-17-pro-max-512g-bh-100",
                            "createdAt": 1.763743832664474E9,
                            "updatedAt": 1.763743836719791E9,
                            "extraFields": {
                                "make": "2",
                                "price": 1599,
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 778,
                                "objectID": 778,
                                "name": "DNS Mobile",
                                "name_l1": "DNS Mobile",
                                "externalID": "902",
                                "product": "featured",
                                "productScore": 0,
                                "licenses": [],
                                "logo": {
                                    "id": 15301866,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15301866/1f4e9251a0bf4306bc1679c64c5f5f85"
                                },
                                "slug": "dns-mobile-902",
                                "slug_l1": "dns-mobile-902",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2021-12-18T10:52:41+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "DNS mobiles"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,599",
                                    "formattedValue_l1": "1,599"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764867035942129E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15594071,
                                "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-d89ddec8-c293-48",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "Apple Price Used أبل السعر مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 225,
                                "level": 2,
                                "externalID": "2-69",
                                "name": "Hazmiyeh",
                                "name_l1": "حازمية",
                                "slug": "hazmiyeh",
                                "slug_l1": "hazmiyeh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 225,
                                    "level": 2,
                                    "externalID": "2-69",
                                    "name": "Hazmiyeh",
                                    "name_l1": "حازمية",
                                    "slug": "hazmiyeh",
                                    "slug_l1": "hazmiyeh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15594071,
                                    "externalID": "c0004659-395f-4bc5-8c45-68a5f24b2c14-d89ddec8-c293-48",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4034623,
                            "objectID": 4034623,
                            "userExternalID": "e2a0f2e6-8e14-4170-85ee-7f36aac08373",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.85289,
                                "lng": 35.51022
                            },
                            "geo_point": [
                                35.51022,
                                33.85289
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "s21 ultra",
                            "title_l1": "s21 ultra",
                            "description": "used like new no box 350$",
                            "description_l1": "used like new no box 350$",
                            "externalID": "116578974",
                            "slug": "s21-ultra",
                            "slug_l1": "s21-ultra",
                            "createdAt": 1.76486686899223E9,
                            "updatedAt": 1.764866870184288E9,
                            "extraFields": {
                                "make": "11",
                                "color": "2",
                                "model": "s21-ultra",
                                "price": 350,
                                "video": "no",
                                "storage": "4",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "Shalhoub Cell"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "S21 Ultra",
                                    "formattedValue_l1": "اس 21 الترا"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "350",
                                    "formattedValue_l1": "350"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "256 GB",
                                    "formattedValue_l1": "256 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                }
                            ],
                            "timestamp": 1.76486686899223E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15116247,
                                "externalID": "e2a0f2e6-8e14-4170-85ee-7f36aac08373-207bade2-126b-4b",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "256 GB 256 جيجابايت Black Individual Price S21 Ultra Samsung Used أسود اس 21 الترا السعر سامسونج فرد مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 8,
                                "level": 1,
                                "externalID": "1-55",
                                "name": "Baabda",
                                "name_l1": "بعبدا",
                                "slug": "baabda",
                                "slug_l1": "baabda"
                            },
                            "location.lvl2": {
                                "id": 226,
                                "level": 2,
                                "externalID": "2-70",
                                "name": "Haret Hreik",
                                "name_l1": "حارة حريك",
                                "slug": "haret-hreik",
                                "slug_l1": "haret-hreik"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 8,
                                    "level": 1,
                                    "externalID": "1-55",
                                    "name": "Baabda",
                                    "name_l1": "بعبدا",
                                    "slug": "baabda",
                                    "slug_l1": "baabda"
                                },
                                {
                                    "id": 226,
                                    "level": 2,
                                    "externalID": "2-70",
                                    "name": "Haret Hreik",
                                    "name_l1": "حارة حريك",
                                    "slug": "haret-hreik",
                                    "slug_l1": "haret-hreik"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15116247,
                                    "externalID": "e2a0f2e6-8e14-4170-85ee-7f36aac08373-207bade2-126b-4b",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4086554,
                            "objectID": 4086554,
                            "userExternalID": "991a40cc-783c-42ee-8ea8-8074feffdba1",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.8997,
                                "lng": 35.50342
                            },
                            "geo_point": [
                                35.50342,
                                33.8997
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "amazfit Balance midnight black",
                            "title_l1": "amazfit Balance midnight black",
                            "description": "still new in box . . not used",
                            "description_l1": "still new in box . . not used",
                            "externalID": "116630906",
                            "slug": "amazfit-balance-midnight-black",
                            "slug_l1": "amazfit-balance-midnight-black",
                            "createdAt": 1.764866222836903E9,
                            "updatedAt": 1.764866224243077E9,
                            "extraFields": {
                                "make": "amazfit",
                                "price": 140,
                                "video": "no",
                                "new_used": "1",
                                "band_color": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "seller_type": "1",
                                "band_material": "3",
                                "panorama": "no",
                                "seller_verified": "yes",
                                "delivery": null
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "Ralph"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": true,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Amazfit",
                                    "formattedValue_l1": "أمازفيت"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "140",
                                    "formattedValue_l1": "140"
                                },
                                {
                                    "name": "Video",
                                    "name_l1": "فيديو",
                                    "attribute": "video",
                                    "formattedValue": "Not Available",
                                    "formattedValue_l1": "غير متوفر"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Band color",
                                    "name_l1": "لون السوار",
                                    "attribute": "band_color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                },
                                {
                                    "name": "Is Deliverable",
                                    "name_l1": "متاح للتوصيل",
                                    "attribute": "deliverable",
                                    "formattedValue": "No",
                                    "formattedValue_l1": "لا"
                                },
                                {
                                    "name": "Seller Type",
                                    "name_l1": "نوع البائع",
                                    "attribute": "seller_type",
                                    "formattedValue": "Individual",
                                    "formattedValue_l1": "فرد"
                                },
                                {
                                    "name": "Band material",
                                    "name_l1": "مادة السوار",
                                    "attribute": "band_material",
                                    "formattedValue": "Rubber",
                                    "formattedValue_l1": "مطاط"
                                }
                            ],
                            "timestamp": 1.764866222836903E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15563958,
                                "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-0739a254-71ab-4a",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 7,
                            "keywords": "Amazfit Black Individual New Price Rubber أسود أمازفيت السعر جديد فرد مطاط",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 99,
                                "level": 2,
                                "externalID": "2-505",
                                "name": "Downtown",
                                "name_l1": "وسط المدينة",
                                "slug": "downtown",
                                "slug_l1": "downtown"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 99,
                                    "level": 2,
                                    "externalID": "2-505",
                                    "name": "Downtown",
                                    "name_l1": "وسط المدينة",
                                    "slug": "downtown",
                                    "slug_l1": "downtown"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 73,
                                "level": 1,
                                "externalID": "324",
                                "name": "Smart Watches",
                                "name_l1": "الساعات الذكية",
                                "slug": "smart-watches",
                                "slug_l1": "smart-watches",
                                "roles": [
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Smart Watche",
                                "nameSingular_l1": "Smart Watche"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 73,
                                    "level": 1,
                                    "externalID": "324",
                                    "name": "Smart Watches",
                                    "name_l1": "الساعات الذكية",
                                    "slug": "smart-watches",
                                    "slug_l1": "smart-watches",
                                    "roles": [
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Smart Watche",
                                    "nameSingular_l1": "Smart Watche"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15563958,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-0739a254-71ab-4a",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15563959,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-01ee44fe-1399-4e",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15385770,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-84f59288-ddad-4d",
                                    "title": null,
                                    "orderIndex": 2,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15385771,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-fdbbd8fd-e17b-48",
                                    "title": null,
                                    "orderIndex": 3,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15385772,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-2160c8d9-43c2-47",
                                    "title": null,
                                    "orderIndex": 4,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15385773,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-83ac25cb-2464-48",
                                    "title": null,
                                    "orderIndex": 5,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15563960,
                                    "externalID": "991a40cc-783c-42ee-8ea8-8074feffdba1-be7caa26-863d-41",
                                    "title": null,
                                    "orderIndex": 6,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4144955,
                            "objectID": 4144955,
                            "userExternalID": "728ccbb3-a0c2-4379-8fa5-b8504f9d7a78",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.63551,
                                "lng": 35.54254
                            },
                            "geo_point": [
                                35.54254,
                                33.63551
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "samsung s25 ultra, 1TB",
                            "title_l1": "samsung s25 ultra, 1TB",
                            "description": "1TB storage, like new, warranty",
                            "description_l1": "1TB storage, like new, warranty",
                            "externalID": "116689309",
                            "slug": "samsung-s25-ultra-1tb",
                            "slug_l1": "samsung-s25-ultra-1tb",
                            "createdAt": 1.764865863883372E9,
                            "updatedAt": 1.764865875879515E9,
                            "extraFields": {
                                "make": "11",
                                "color": "2",
                                "model": "s25-ultra",
                                "price": 1100,
                                "storage": "6",
                                "new_used": "2",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication"
                                ],
                                "name": "arkan breish"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Samsung",
                                    "formattedValue_l1": "سامسونج"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "S25 Ultra",
                                    "formattedValue_l1": "اس 25 الترا"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "1,100",
                                    "formattedValue_l1": "1,100"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "1 TB",
                                    "formattedValue_l1": "1 تيرابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764865863883372E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685261,
                                "externalID": "728ccbb3-a0c2-4379-8fa5-b8504f9d7a78-5c71201b-b974-45",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 2,
                            "keywords": "1 TB 1 تيرابايت Black Price S25 Ultra Samsung Used أسود اس 25 الترا السعر سامسونج مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 13,
                                "level": 1,
                                "externalID": "1-60",
                                "name": "Chouf",
                                "name_l1": "الشوف",
                                "slug": "chouf",
                                "slug_l1": "chouf"
                            },
                            "location.lvl2": {
                                "id": 271,
                                "level": 2,
                                "externalID": "2-11",
                                "name": "Other in Chouf",
                                "name_l1": "مدن أخرى في الشوف",
                                "slug": "other-chouf",
                                "slug_l1": "other-chouf"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 13,
                                    "level": 1,
                                    "externalID": "1-60",
                                    "name": "Chouf",
                                    "name_l1": "الشوف",
                                    "slug": "chouf",
                                    "slug_l1": "chouf"
                                },
                                {
                                    "id": 271,
                                    "level": 2,
                                    "externalID": "2-11",
                                    "name": "Other in Chouf",
                                    "name_l1": "مدن أخرى في الشوف",
                                    "slug": "other-chouf",
                                    "slug_l1": "other-chouf"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685261,
                                    "externalID": "728ccbb3-a0c2-4379-8fa5-b8504f9d7a78-5c71201b-b974-45",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                },
                                {
                                    "id": 15685262,
                                    "externalID": "728ccbb3-a0c2-4379-8fa5-b8504f9d7a78-8d89309b-4313-47",
                                    "title": null,
                                    "orderIndex": 1,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4143471,
                            "objectID": 4143471,
                            "userExternalID": "182e32c1-1c3e-4772-8301-8be3c4c2b9ae",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.87996,
                                "lng": 35.54583
                            },
                            "geo_point": [
                                35.54583,
                                33.87996
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": {
                                "auto_refresh_ad": {
                                    "expiresAt": 1.765989096792824E9,
                                    "appliedAt": 1.764779496792824E9,
                                    "productPurchaseId": 846952,
                                    "name": {
                                        "en": "3 Bump up daily for 14 days",
                                        "ar": "جدد إعلاني يومياً لمدة 14 يوم العدد 3"
                                    }
                                },
                                "ad_limit_bump": {
                                    "expiresAt": 1.767371493660537E9,
                                    "appliedAt": 1.764779493660537E9,
                                    "productPurchaseId": 846950,
                                    "name": {
                                        "en": "Offline - 20 Listings",
                                        "ar": "Offline - 20 Listings"
                                    }
                                }
                            },
                            "title": "IPHONE 17PROMAX 2TB 1Sim / Esim",
                            "title_l1": "IPHONE 17PROMAX 2TB 1Sim / Esim",
                            "description": "not active 1YEAR APPLE WARRANTY IPHONE 17 Pro max 2TB WITH 1 physical sim and esim official apple warranty",
                            "description_l1": "not active 1YEAR APPLE WARRANTY IPHONE 17 Pro max 2TB WITH 1 physical sim and esim official apple warranty",
                            "externalID": "116687825",
                            "slug": "iphone-17promax-2tb-1sim-esim",
                            "slug_l1": "iphone-17promax-2tb-1sim-esim",
                            "createdAt": 1.764779493661934E9,
                            "updatedAt": 1.764779497425328E9,
                            "extraFields": {
                                "make": "2",
                                "color": "1",
                                "model": "17-pro-max",
                                "price": 2699,
                                "storage": "8",
                                "new_used": "1",
                                "price_type": "price",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "2"
                            },
                            "type": "general",
                            "agency": {
                                "id": 2292,
                                "objectID": 2292,
                                "name": "Rano Cell",
                                "name_l1": "Rano Cell",
                                "externalID": "7074",
                                "product": null,
                                "productScore": null,
                                "licenses": [],
                                "logo": {
                                    "id": 8790256,
                                    "url": "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/8790256/0cd16febe11c4b52bba18dfb1c106dc4"
                                },
                                "slug": "Rano-Cell-7074",
                                "slug_l1": "Rano-Cell-7074",
                                "tr": 4,
                                "tier": 4,
                                "roles": [
                                    "allow_agents_whatsapp_number"
                                ],
                                "active": true,
                                "createdAt": "2023-06-01T12:40:43+00:00",
                                "commercialNumber": "",
                                "shortNumber": null,
                                "type": "unknown"
                            },
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number",
                                    "show_whatsapp_phone_number"
                                ],
                                "name": "Ranos Cell"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "White",
                                    "formattedValue_l1": "أبيض"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "17 Pro Max",
                                    "formattedValue_l1": "آيفون 17 برو ماكس"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "2,699",
                                    "formattedValue_l1": "2,699"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "2 TB",
                                    "formattedValue_l1": "2 تيرابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "New",
                                    "formattedValue_l1": "جديد"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Price",
                                    "formattedValue_l1": "السعر"
                                }
                            ],
                            "timestamp": 1.764865896792824E9,
                            "productScore": 8,
                            "coverPhoto": {
                                "id": 15677477,
                                "externalID": "182e32c1-1c3e-4772-8301-8be3c4c2b9ae-f791997c-d9ca-45",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "17 Pro Max 2 TB 2 تيرابايت Apple New Price White آيفون 17 برو ماكس أبل أبيض السعر جديد",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 21,
                                "level": 1,
                                "externalID": "1-68",
                                "name": "Metn",
                                "name_l1": "المتن",
                                "slug": "metn",
                                "slug_l1": "metn"
                            },
                            "location.lvl2": {
                                "id": 421,
                                "level": 2,
                                "externalID": "2-142",
                                "name": "Dekwaneh",
                                "name_l1": "دكوانة",
                                "slug": "dekwaneh",
                                "slug_l1": "dekwaneh"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 21,
                                    "level": 1,
                                    "externalID": "1-68",
                                    "name": "Metn",
                                    "name_l1": "المتن",
                                    "slug": "metn",
                                    "slug_l1": "metn"
                                },
                                {
                                    "id": 421,
                                    "level": 2,
                                    "externalID": "2-142",
                                    "name": "Dekwaneh",
                                    "name_l1": "دكوانة",
                                    "slug": "dekwaneh",
                                    "slug_l1": "dekwaneh"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15677477,
                                    "externalID": "182e32c1-1c3e-4772-8301-8be3c4c2b9ae-f791997c-d9ca-45",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    },
                    {
                        "_score": null,
                        "_source": {
                            "id": 4144954,
                            "objectID": 4144954,
                            "userExternalID": "025c6fd5-ef29-4549-b342-22c27826a04e",
                            "sourceID": 1,
                            "state": "active",
                            "purpose": "for-sale",
                            "geography": {
                                "lat": 33.884086,
                                "lng": 35.504571
                            },
                            "geo_point": [
                                35.504571,
                                33.884086
                            ],
                            "price": 0.0,
                            "product": null,
                            "productInfo": null,
                            "activeProducts": null,
                            "title": "used iphone 13 pro for sale",
                            "title_l1": "used iphone 13 pro for sale",
                            "description": "iphone 13 pro for sale: \nall original not opened before \nbattery health 77% \ntrue tone \nface id\n(broken back) \nspecial price for 380$\n( 0 scratch from sides)",
                            "description_l1": "iphone 13 pro for sale: \nall original not opened before \nbattery health 77% \ntrue tone \nface id\n(broken back) \nspecial price for 380$\n( 0 scratch from sides)",
                            "externalID": "116689308",
                            "slug": "used-iphone-13-pro-for-sale",
                            "slug_l1": "used-iphone-13-pro-for-sale",
                            "createdAt": 1.764865833067022E9,
                            "updatedAt": 1.764865841933903E9,
                            "extraFields": {
                                "make": "2",
                                "color": "2",
                                "model": "13-pro",
                                "price": 380,
                                "storage": "4",
                                "new_used": "2",
                                "price_type": "arranged",
                                "deliverable": "no",
                                "video": "no",
                                "panorama": "no",
                                "seller_verified": "no",
                                "delivery": null,
                                "seller_type": "1"
                            },
                            "type": "general",
                            "contactInfo": {
                                "roles": [
                                    "allow_chat_communication",
                                    "show_phone_number"
                                ],
                                "name": "User 0Zo5Hf"
                            },
                            "videoCount": 0,
                            "documentCount": 0,
                            "panoramaCount": 0,
                            "isSellerVerified": false,
                            "formattedExtraFields": [
                                {
                                    "name": "Brand",
                                    "name_l1": "الماركة",
                                    "attribute": "make",
                                    "formattedValue": "Apple",
                                    "formattedValue_l1": "أبل"
                                },
                                {
                                    "name": "Color",
                                    "name_l1": "اللون",
                                    "attribute": "color",
                                    "formattedValue": "Black",
                                    "formattedValue_l1": "أسود"
                                },
                                {
                                    "name": "Model",
                                    "name_l1": "موديل",
                                    "attribute": "model",
                                    "formattedValue": "13 Pro",
                                    "formattedValue_l1": "13 برو"
                                },
                                {
                                    "name": "Price",
                                    "name_l1": "السعر",
                                    "attribute": "price",
                                    "formattedValue": "380",
                                    "formattedValue_l1": "380"
                                },
                                {
                                    "name": "Storage",
                                    "name_l1": "التخزين",
                                    "attribute": "storage",
                                    "formattedValue": "256 GB",
                                    "formattedValue_l1": "256 جيجابايت"
                                },
                                {
                                    "name": "Condition",
                                    "name_l1": "الحالة",
                                    "attribute": "new_used",
                                    "formattedValue": "Used",
                                    "formattedValue_l1": "مستعمل"
                                },
                                {
                                    "name": "Price Type",
                                    "name_l1": "نوع السعر",
                                    "attribute": "price_type",
                                    "formattedValue": "Negotiable",
                                    "formattedValue_l1": "قابل للنقاش"
                                }
                            ],
                            "timestamp": 1.764865833067022E9,
                            "productScore": 7,
                            "coverPhoto": {
                                "id": 15685260,
                                "externalID": "025c6fd5-ef29-4549-b342-22c27826a04e-ccf5058f-fb22-49",
                                "title": null,
                                "orderIndex": 0,
                                "nimaScore": null,
                                "main": true
                            },
                            "photoCount": 1,
                            "keywords": "13 Pro 13 برو 256 GB 256 جيجابايت Apple Black Negotiable Used أبل أسود قابل للنقاش مستعمل",
                            "documentsTags": [],
                            "format": "lite",
                            "location.lvl0": {
                                "id": 1,
                                "level": 0,
                                "externalID": "0-1",
                                "name": "Lebanon",
                                "name_l1": "لبنان",
                                "slug": "lebanon",
                                "slug_l1": "lebanon"
                            },
                            "location.lvl1": {
                                "id": 2,
                                "level": 1,
                                "externalID": "1-30",
                                "name": "Beirut",
                                "name_l1": "بيروت",
                                "slug": "beirut",
                                "slug_l1": "beirut"
                            },
                            "location.lvl2": {
                                "id": 2839,
                                "level": 2,
                                "externalID": "2-3024",
                                "name": "Nowayri",
                                "name_l1": "النويري",
                                "slug": "nowari",
                                "slug_l1": "nowari"
                            },
                            "location": [
                                {
                                    "id": 1,
                                    "level": 0,
                                    "externalID": "0-1",
                                    "name": "Lebanon",
                                    "name_l1": "لبنان",
                                    "slug": "lebanon",
                                    "slug_l1": "lebanon"
                                },
                                {
                                    "id": 2,
                                    "level": 1,
                                    "externalID": "1-30",
                                    "name": "Beirut",
                                    "name_l1": "بيروت",
                                    "slug": "beirut",
                                    "slug_l1": "beirut"
                                },
                                {
                                    "id": 2839,
                                    "level": 2,
                                    "externalID": "2-3024",
                                    "name": "Nowayri",
                                    "name_l1": "النويري",
                                    "slug": "nowari",
                                    "slug_l1": "nowari"
                                }
                            ],
                            "category.lvl0": {
                                "id": 3,
                                "level": 0,
                                "externalID": "147",
                                "name": "Mobile Phones & Accessories",
                                "name_l1": "موبايلات واكسسواراتها",
                                "slug": "mobile-phones-accessories",
                                "slug_l1": "mobile-phones-accessories",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phones & Accessory",
                                "nameSingular_l1": "Mobile Phones & Accessory"
                            },
                            "category.lvl1": {
                                "id": 70,
                                "level": 1,
                                "externalID": "9",
                                "name": "Mobile Phones",
                                "name_l1": "موبايلات",
                                "slug": "mobile-phones",
                                "slug_l1": "mobile-phones",
                                "roles": [
                                    "include_purpose_in_title",
                                    "include_purpose_in_description",
                                    "show_phone_number",
                                    "allows_delivery",
                                    "allows_video"
                                ],
                                "nameSingular": "Mobile Phone",
                                "nameSingular_l1": "Mobile Phone"
                            },
                            "category": [
                                {
                                    "id": 3,
                                    "level": 0,
                                    "externalID": "147",
                                    "name": "Mobile Phones & Accessories",
                                    "name_l1": "موبايلات واكسسواراتها",
                                    "slug": "mobile-phones-accessories",
                                    "slug_l1": "mobile-phones-accessories",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phones & Accessory",
                                    "nameSingular_l1": "Mobile Phones & Accessory"
                                },
                                {
                                    "id": 70,
                                    "level": 1,
                                    "externalID": "9",
                                    "name": "Mobile Phones",
                                    "name_l1": "موبايلات",
                                    "slug": "mobile-phones",
                                    "slug_l1": "mobile-phones",
                                    "roles": [
                                        "include_purpose_in_title",
                                        "include_purpose_in_description",
                                        "show_phone_number",
                                        "allows_delivery",
                                        "allows_video"
                                    ],
                                    "nameSingular": "Mobile Phone",
                                    "nameSingular_l1": "Mobile Phone"
                                }
                            ],
                            "photos": [
                                {
                                    "id": 15685260,
                                    "externalID": "025c6fd5-ef29-4549-b342-22c27826a04e-ccf5058f-fb22-49",
                                    "title": null,
                                    "orderIndex": 0,
                                    "nimaScore": null
                                }
                            ],
                            "external_link": null,
                            "external_link_l1": null
                        }
                    }
                ]
            }
        }
    ]