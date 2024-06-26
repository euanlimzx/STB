import neatCsv from "neat-csv";
let colNameToIdMap = {};
const draftColumnMetadata1 = {
  datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
  columns: [
    {
      machineReadableName: "DataSeries",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 0,
      id: "c_32hw5495vgit9646avckzowh0",
      humanReadableName: "DataSeries",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2022",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 1,
      id: "c_7vtpzw17aasksp7aib9b3lgk",
      humanReadableName: "2022",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2021",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 2,
      id: "c_7sxhb1m39kyyezosokmqti6pm",
      humanReadableName: "2021",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2020",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 3,
      id: "c_3yrbe3rlaa8fmxrqacs8f6fyb",
      humanReadableName: "2020",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2019",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 4,
      id: "c_emyn2oj5wvhfm7urde41ra67w",
      humanReadableName: "2019",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2018",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 5,
      id: "c_2jhr4yogy0z68je5x86qgmzcu",
      humanReadableName: "2018",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2017",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 6,
      id: "c_75axoruy38mhmrs9q52dszz60",
      humanReadableName: "2017",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2016",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 7,
      id: "c_7rx9hkbzutwdd0zdhty4cxy3g",
      humanReadableName: "2016",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2015",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 8,
      id: "c_eh7sjt0mcff3n0lcu2ipmnehi",
      humanReadableName: "2015",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2014",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 9,
      id: "c_94c28tozisbgbnke3f06unhja",
      humanReadableName: "2014",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2013",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 10,
      id: "c_75n4m7ld7h0d9rab5jletui5w",
      humanReadableName: "2013",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2012",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 11,
      id: "c_55wffspypnhhpf1op9ebcv3t0",
      humanReadableName: "2012",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2011",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 12,
      id: "c_dksnilf4bg3muq8foayot1qtc",
      humanReadableName: "2011",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2010",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 13,
      id: "c_cme7a49soqfnfgpss4xn7l5jo",
      humanReadableName: "2010",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2009",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 14,
      id: "c_39kwyjb2x90aqz19pusqxsuad",
      humanReadableName: "2009",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2008",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 15,
      id: "c_55n7xb69v472flapzc5z4c9mp",
      humanReadableName: "2008",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2007",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 16,
      id: "c_68g8awtr5rhzumqpas9rnsdk6",
      humanReadableName: "2007",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2006",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 17,
      id: "c_3wnyhvrji7ulfwv9bpghgpt79",
      humanReadableName: "2006",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2005",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 18,
      id: "c_9lzprmcppm02j78qwdxsgykos",
      humanReadableName: "2005",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2004",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 19,
      id: "c_5vxpbnsybr4ipgrvpoytv881r",
      humanReadableName: "2004",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2003",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 20,
      id: "c_an92mgwqyvtfbudydmwcof8es",
      humanReadableName: "2003",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2002",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 21,
      id: "c_4rxjsk2xuysvu98e3yth8axfk",
      humanReadableName: "2002",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2001",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 22,
      id: "c_67hxrugx8elj132rfjxm6tbui",
      humanReadableName: "2001",
      isIdentifiable: false,
    },
    {
      machineReadableName: "2000",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 23,
      id: "c_52ooosgz09xxqrlnfr0vaw9gd",
      humanReadableName: "2000",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1999",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 24,
      id: "c_3cih5b69nxby9ii3mfccarujg",
      humanReadableName: "1999",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1998",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 25,
      id: "c_airdog19hpes3lh3qp93v2pek",
      humanReadableName: "1998",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1997",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 26,
      id: "c_chwmj4vs99i3rzr6c0lpvjdm5",
      humanReadableName: "1997",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1996",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 27,
      id: "c_83gge4ij1pyj9a36855ztwkg5",
      humanReadableName: "1996",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1995",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 28,
      id: "c_afmz5pe7sdf301d4ubwni6q6g",
      humanReadableName: "1995",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1994",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 29,
      id: "c_5ukarrz6kb2undbc7xu9jo6xn",
      humanReadableName: "1994",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1993",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 30,
      id: "c_4ic8d9jws1jdi9q0rr4fn8mjd",
      humanReadableName: "1993",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1992",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 31,
      id: "c_3er584235k1z9skp8ylaz5owt",
      humanReadableName: "1992",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1991",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 32,
      id: "c_4yodtfn1l26o94rybmkl5hwgf",
      humanReadableName: "1991",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1990",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 33,
      id: "c_5hjiq36qenlrnz2texupvwqd5",
      humanReadableName: "1990",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1989",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 34,
      id: "c_ega48lkq983n657ops7ox1jqm",
      humanReadableName: "1989",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1988",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 35,
      id: "c_2e3jxu4rkku6pzyfb0km3132v",
      humanReadableName: "1988",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1987",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 36,
      id: "c_byeyba8jhtpos2xxvawdsl0l2",
      humanReadableName: "1987",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1986",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 37,
      id: "c_95ovdoj4mbpsbp2zbohow6d62",
      humanReadableName: "1986",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1985",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 38,
      id: "c_bjlx333sf6i4fu5bufjemeyiz",
      humanReadableName: "1985",
      isIdentifiable: false,
    },
    {
      machineReadableName: "1984",
      dataType: "TEXT",
      description: "",
      datasetId: "d_d19fe36a889273a7e18c6b3766fb0fbc",
      index: 39,
      id: "c_d06yuepcrfi2scsk7hwdt0aty",
      humanReadableName: "1984",
      isIdentifiable: false,
    },
  ],
};

const draftColumnMetadata2 = {
  columns: [
    {
      unitOfMeasure: "Number",
      machineReadableName: "DataSeries",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 0,
      id: "c_61yud6a0ontradp3w60tglj87",
      humanReadableName: "Data Series",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Nov",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 1,
      id: "c_aes8t99ujp091c43oesdhgv6o",
      humanReadableName: "2023 Nov",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Oct",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 2,
      id: "c_85k2kn3d5wvnh8tos6lasqjw1",
      humanReadableName: "2023 Oct",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Sep",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 3,
      id: "c_4yo4in7eectwv82tuwadd55b2",
      humanReadableName: "2023 Sep",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Aug",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 4,
      id: "c_4ztil3k1vb88jfwp6cjktux97",
      humanReadableName: "2023 Aug",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Jul",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 5,
      id: "c_y3kctljbp46a8c7m84ao6t45",
      humanReadableName: "2023 Jul",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Jun",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 6,
      id: "c_4zc7n41ungjzvrqr1nqyjvb94",
      humanReadableName: "2023 Jun",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023May",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 7,
      id: "c_4ncos1ws0od0om90rjc0hn6nv",
      humanReadableName: "2023 May",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Apr",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 8,
      id: "c_eb2aqfjxdxcvksghm2u1f4112",
      humanReadableName: "2023 Apr",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Mar",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 9,
      id: "c_5i2phksa4jorvtfeer3gkn08w",
      humanReadableName: "2023 Mar",
    },
    {
      unitOfMeasure: "Number",
      machineReadableName: "2023Feb",
      dataType: "TEXT",
      datasetId: "d_a99cd8b934ad8a6fdabe1b4f3d15ed53",
      index: 10,
      id: "c_9hckfaaba6qnuo9o92hj8po1w",
      humanReadableName: "2023 Feb",
    },
  ],
};

let columns = [];
let unrecognizedColumns = [];
const columnNameToIdMap1 = {};
const columnNameToIdMap2 = new Map()
for (const c of draftColumnMetadata1.columns) {
  columnNameToIdMap1[c.machineReadableName] = c.id;
  //columnNameToIdMap2.set(c.machineReadableName, c.id)
}

console.log(columnNameToIdMap1)
// console.log(Array.from(columnNameToIdMap2.values()))

// const csvData =
//   "DataSeries,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984";
// const rows = await neatCsv(csvData, {
//   mapHeaders: ({ header, index }) => {
//     const cleanedHeader = header.trim();

//     // preserve ordering of column names when getting the csv data from s3
//     // should not throw error since there should be at least one row
//     // Note that we cannot read the first from the original file directly because neatCsv parses the columns
//     // differently (removes quotes for example)
//     // An alternative is to preserve the original column name and remap as such
//     columns[index] = cleanedHeader;

//     // get column id from machine-readable name
//     //const id = columnNameToIdMap1[cleanedHeader];
//     const id = columnNameToIdMap2.get(cleanedHeader)
//     if (!id) {
//       unrecognizedColumns.push(cleanedHeader);
//     }

//     // set column id
//     colNameToIdMap[cleanedHeader] = id;
//     console.log(id)
//     console.log(colNameToIdMap)
//     return id;
//   },
// });
//console.log(rows);
