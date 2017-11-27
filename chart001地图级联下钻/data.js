var chinaData = [
    {"provinceId":"110000","name":"北京","value":18,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"130000","name":"河北","value":5,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"320000","name":"江苏","value":5,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"330000","name":"浙江","value":2,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"340000","name":"安徽","value":1,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"350000","name":"福建","value":2,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"360000","name":"江西","value":2,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"370000","name":"山东","value":1,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"420000","name":"湖北","value":1,"itemStyle":{"normal":{"label":{"show":false}}}},
    {"provinceId":"620000","name":"甘肃","value":1,"itemStyle":{"normal":{"label":{"show":false}}}},
    //由于南海诸岛区域的js是加密的  所以只能用粗糙的方法  将这个区域设置悬停的样式为地图的背景色  
    {"name":"南海诸岛","itemStyle":{"normal":{"opacity":0,"label":{"show":false}}},"tooltip":{"backgroundColor":"#fff"}}];



/**
 * 数据为树形的
  省份名称：{
        "该省份下的所有牧场"[
            {
                //牧场id
                "farmId": "1f7030bfd652479b986e228ec6271e5e",
                "name": "杨晓专用牧场",
                "value": []
            }
                            
            ]
        }
 * 
 * 
 */
var provinceData ={
    "北京": {
        "farms": [
            {
                "farmId": "1f7030bfd652479b986e228ec6271e5e",
                "name": "杨晓专用牧场",
                "value": []
            },
            {
                "farmId": "9df781e92b604a9088acae32a1408597",
                "name": "昌平世信",
                "value": [
                    116.14,
                    40.18021
                ]
            },
            {
                "farmId": "437ab8e8132343b8a690fdfce29de957",
                "name": "沈牧场",
                "value": []
            },
            {
                "farmId": "93455be4a0214a13b2d893d864281540",
                "name": "示范场",
                "value": []
            },
            {
                "farmId": "43f3eec9ab0f4733b0d404ce800a9c13",
                "name": "何氏大大大大大大牧场",
                "value": []
            },
            {
                "farmId": "af0939325edd4ecf9303e5569cffb2a6",
                "name": "d's'g'd'f'g",
                "value": []
            },
            {
                "farmId": "113111cbccf94a5fb94b2577677c65df",
                "name": "北京伟博萌",
                "value": [
                    116.4223,
                    39.9295
                ]
            },
            {
                "farmId": "95e59cae4f4e4c198accd4521b4b47d2",
                "name": "新牧场",
                "value": []
            },
            {
                "farmId": "ff720bc87c2b4d5cbb7b9e467d673fbf",
                "name": "测试牧场",
                "value": []
            },
            {
                "farmId": "e117eb617a874276be142d52968660a0",
                "name": "测试牧场",
                "value": []
            },
            {
                "farmId": "95f9b6e7478345719afb4e9198027b62",
                "name": "0319",
                "value": []
            },
            {
                "farmId": "0299ee16f7df4a0cb4a9b8e6d5bff6b0",
                "name": "Airbnb",
                "value": []
            },
            {
                "farmId": "39f7643c673d4695b3a825d8ac188532",
                "name": "bugfree",
                "value": []
            },
            {
                "farmId": "bc3f94a960244be68dca2e50db6e211f",
                "name": "测试新增流程",
                "value": []
            },
            {
                "farmId": "1e8ecf9dc7a9473aa448715b70781666",
                "name": "北京润民",
                "value": [
                    116.7787,
                    40.285
                ]
            },
            {
                "farmId": "9640b23d9178467e9bc8aead06cc87b5",
                "name": "批量导入",
                "value": []
            },
            {
                "farmId": "07e0631c24354e54a6690eaec5d5e144",
                "name": "12测",
                "value": []
            },
            {
                "farmId": "3f284a70ec894436937c1076e26f6e37",
                "name": "21天妊娠率",
                "value": []
            }
        ],
        "provinceId": "110000",
        "provinceName": "北京"
    },
    "安徽": {
        "farms": [
            {
                "farmId": "f39a7cf477be46ba8e2b0aea23fabc6f",
                "name": "小丹牧场003",
                "value": []
            }
        ],
        "provinceId": "340000",
        "provinceName": "安徽"
    },
    "山东": {
        "farms": [
            {
                "farmId": "abbe34bfc8a841a9bbe40de548b649e4",
                "name": "寒亭卫东",
                "value": [
                    119.24496,
                    36.907097
                ]
            }
        ],
        "provinceId": "370000",
        "provinceName": "山东"
    },
    "江苏": {
        "farms": [
            {
                "farmId": "fd26c98fd0b24904be6855128f027f6f",
                "name": "何氏大牧场",
                "value": []
            },
            {
                "farmId": "0c63371667a34e5181b977f49de7eaec",
                "name": "new",
                "value": []
            },
            {
                "farmId": "37a352a7f3764c5fb52241b624256327",
                "name": "零头牛测试",
                "value": []
            },
            {
                "farmId": "fceab70b4f364adca2dda07512a8ffce",
                "name": "加农",
                "value": []
            },
            {
                "farmId": "c8200464c16842ef84fe4d052cb09875",
                "name": "季节",
                "value": []
            }
        ],
        "provinceId": "320000",
        "provinceName": "江苏"
    },
    "江西": {
        "farms": [
            {
                "farmId": "674dbdbfc33f46e9bccbb1bfc750dc69",
                "name": "lei20160226",
                "value": []
            },
            {
                "farmId": "d756c178ef60412f8a0f5f39cfd1244e",
                "name": "阿里牧场",
                "value": []
            }
        ],
        "provinceId": "360000",
        "provinceName": "江西"
    },
    "河北": {
        "farms": [
            {
                "farmId": "fe10572c2d914c6fb69827070148534b",
                "name": "滦南犇鑫",
                "value": [
                    118.6753,
                    39.6026
                ]
            },
            {
                "farmId": "2a0a37d73f5f4f209c13073c4b946d7e",
                "name": "万全广恒",
                "value": [
                    114.4752,
                    40.7708
                ]
            },
            {
                "farmId": "b0af0d49e19b44e0be9ad5fd780baa8f",
                "name": "宣化盛达馨",
                "value": [
                    114.9344,
                    40.6319
                ]
            },
            {
                "farmId": "1b119f4c64804334a2b90d9dcfe44e17",
                "name": "徐水韦氏",
                "value": [
                    115.5973,
                    38.9743
                ]
            },
            {
                "farmId": "5e4771b119ec497dbee3cd38c36b3761",
                "name": "抚宁绿洲",
                "value": [
                    119.32997,
                    39.83812
                ]
            }
        ],
        "provinceId": "130000",
        "provinceName": "河北"
    },
    "浙江": {
        "farms": [
            {
                "farmId": "cfa4bcb1bc2646c0af9956a896954ed2",
                "name": "1",
                "value": []
            },
            {
                "farmId": "01958dd9abf04df0bec9d69389d4d967",
                "name": "忆江南",
                "value": []
            }
        ],
        "provinceId": "330000",
        "provinceName": "浙江"
    },
    "湖北": {
        "farms": [
            {
                "farmId": "2214278d24c54288afe7ab8ebd868075",
                "name": "一致性2",
                "value": []
            }
        ],
        "provinceId": "420000",
        "provinceName": "湖北"
    },
    "甘肃": {
        "farms": [
            {
                "farmId": "54c9ac2a8e824a08b499686f3e0ac5d6",
                "name": "雨蒙专用牧场",
                "value": []
            }
        ],
        "provinceId": "620000",
        "provinceName": "甘肃"
    },
    "福建": {
        "farms": [
            {
                "farmId": "0b36e72a46464131a889b65827bfc1e2",
                "name": "测试001",
                "value": []
            },
            {
                "farmId": "49b929e76cd148af8febc3d58ad7644e",
                "name": "不要动",
                "value": []
            }
        ],
        "provinceId": "350000",
        "provinceName": "福建"
    }
};