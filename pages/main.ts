const { I } = inject();

export = {

  // data
  headers: {
    Accept: '*/*',
    'X-Client': '{"Context":"eyJ0eXAiOiJKV1QiLCJhbGciOiJHbG9iYWwuTW9iaWxlLkFwaS5BdXRoLkFwaS5TaGEyNTZBbGdvcml0aG0ifQ.IntcIkxlZ2lzbGF0aW9uXCI6XCJGclwiLFwiU2l0ZVwiOlwiZnJmclwiLFwiTGFuZ3VhZ2VcIjpcImZyXCIsXCJDaGFubmVsSWRcIjpcIkJldGNsaWNGclwiLFwiVW5pdmVyc2VcIjpcIlNwb3J0c1wiLFwiTm90QmVmb3JlXCI6XCIyMDIxLTEyLTIxVDEyOjA3OjE3LjI3OTA1ODJaXCIsXCJFeHBpcmF0aW9uVGltZVwiOlwiMjAyMS0xMi0yMVQxMjoyOToxNy4yNzkwNTgyWlwifSI.utghl8luBveq5XTylIgbBI73foTJUPgJLy6p715MRJQ","Auth":"eyJ0eXAiOiJKV1QiLCJhbGciOiJHbG9iYWwuTW9iaWxlLkFwaS5BdXRoLkFwaS5TaGEyNTZBbGdvcml0aG0ifQ.IntcIklwXCI6XCI4My4xOTMuMjM1LjEzNFwiLFwiVXNlcklkXCI6MCxcIlNlc3Npb25cIjpudWxsLFwiQ291bnRyeUNvZGVcIjpudWxsLFwiTGFuZ3VhZ2VDb2RlXCI6bnVsbCxcIkN1cnJlbmN5Q29kZVwiOm51bGwsXCJJc0FkbWluXCI6ZmFsc2UsXCJJc0xvZ2dlZEZyb21Cb1wiOmZhbHNlLFwiSXNMYXVuY2hlclwiOmZhbHNlLFwiUmVndWxhdG9ySWRcIjotMSxcIk5vdEJlZm9yZVwiOlwiMjAyMS0xMi0yMVQxMjowNzoxNy4yNzkwNTgyWlwiLFwiRXhwaXJhdGlvblRpbWVcIjpcIjIwMjEtMTItMjFUMTU6MDk6MTcuMjc5MDU4MlpcIn0i.AD96-ZEu-FWH13N0GGi_Y-2hiOzuzN0QwBAHUmc5saI","Device":"Desktop"}'
  },

  // locators
  mainPageUrl: 'https://www.betclic.fr/',

  // methods

  validateHttpCode(state: any, expected: number) {
    I.assertEqual(state.responseObj.status, expected);
  }

}
