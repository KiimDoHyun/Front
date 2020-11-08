<template>
  <v-container>
    <!-- 일일 운동 시간 -->
      <v-row>
        <v-col
        cols="12"
        >
          <h1
          style="text-align:center"
          >일일 운동 시간</h1>
        </v-col>
        <v-col
        cols="12">
          <h3
           style="text-align:center"
          >{{time}}</h3>
        </v-col>
      </v-row>

    <!-- 운동 카테고리 (상체, 하체) -->
      <v-row>
        <v-col cols="6" offset-sm="3" offset="3" offset-lg="2" lg="4"
          >
          <router-link to="/upperBody">
          <v-card color="primary">
            <v-img
              :src="require('../assets/logo.svg')"
              contain
              max-height="40vh"
              >
            </v-img>
          </v-card>

            <v-row>
              <v-col cols="12">
                <h3 style="text-align:center">상체</h3>
              </v-col>
            </v-row>
          </router-link>
        </v-col>

        <v-col cols="6" offset-sm="3" offset="3" offset-lg="2" lg="4"
          >
          <router-link to="/LowerBody">
            <v-card color="primary">
            <v-img
              :src="require('../assets/logo.svg')"
              contain
              max-height="40vh"
              >
            </v-img>
          </v-card>

            <v-row>
              <v-col cols="12">
                <h3 style="text-align:center">하체</h3>
            </v-col>
          </v-row>
        </router-link>
      </v-col>
    </v-row>
    <!-- 카카오 포즈 API 테스트 -->
    <v-row>
      <v-col cols="12" style="text-align:center">
        <v-btn color="warning" @click="test()">
          통신 예제 버튼
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        time:"HH:MM:SS",
        isSuccess:false,
        key:"	171e852e529d11d3d713d92d9b1e8fb8",
        type : "multipart/form-data",
        file: "../assets/test-img.jpg",
        isOn:false,
        dummy:1,
    }),

    methods: {
      turnOn() {
        this.isOn = !this.isOn
      },

      /*
      내꺼 목록
      네이티브 앱 키	781489a103ddccc3b511969431b55989
      REST API 키	171e852e529d11d3d713d92d9b1e8fb8
      JavaScript 키	d27082f967f9f4e03c4612cd438f24d6
      Admin 키	68be294ba924b0a510ff6467a12e3328
      */
     
     //테스트 서버와 통신
      test() {
        this.axios.get("http://localhost:5000/get")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      },
    }
    
}
</script>

<style>

</style>