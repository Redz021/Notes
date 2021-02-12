<template>
  <div class="container">
    <h4>欢迎，{{ username }}</h4>
    <a href="javascript:void(0)" @click="logout">注销</a>
    <div class="header">
      <el-form ref="form" label-width="80px">
        <div class="item">
          <el-form-item label="姓名">
            <el-input v-model="name"></el-input>
          </el-form-item>
        </div>
        <div class="item">
          <el-form-item label="年龄">
            <el-input v-model="age"></el-input>
          </el-form-item>
        </div>
        <div class="item">
          <el-form-item label="性别">
            <el-select v-model="sex">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-button type="primary" style="margin-left: 20px" @click="query(true)"
          >查询</el-button
        >
        <el-button type="success" @click="newAdd">新增</el-button>
      </el-form>
    </div>
    <div class="formpart">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="180"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100%">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editFunc(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="delFunc(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination 
        @current-change="handleCurrentChange"
        :pageSize="pageSize"
        :currentPage.sync="curPage"
        layout="prev, pager, next, jumper"
        :total="totalCount"></el-pagination>
    </div>
    <el-dialog title="新增" :visible.sync="dialogVisible" width="30%">
      <el-form label-width="40px">
        <div class="dialogitem">
          <el-form-item label="姓名">
            <el-input v-model="add.name"></el-input>
          </el-form-item>
        </div>
        <div class="dialogitem">
          <el-form-item label="年龄">
            <el-input v-model="add.age"></el-input>
          </el-form-item>
        </div>
        <div class="dialogitem">
          <el-form-item label="性别">
            <el-select v-model="add.sex">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addConfirm">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="dialogVisible2" width="30%">
      <el-form label-width="40px">
        <div class="dialogitem">
          <el-form-item label="姓名">
            <el-input v-model="update.name"></el-input>
          </el-form-item>
        </div>
        <div class="dialogitem">
          <el-form-item label="年龄">
            <el-input v-model="update.age"></el-input>
          </el-form-item>
        </div>
        <div class="dialogitem">
          <el-form-item label="性别">
            <el-select v-model="update.sex">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取消</el-button>
        <el-button type="primary" @click="editConfirm">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogVisible3" width="30%">
      <div>是否确认删除?</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取消</el-button>
        <el-button type="primary" @click="delConfirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelWidth: "120px",
      name: "",
      age: "",
      sex: "",
      options2: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "2",
          label: "女"
        }
      ],
      tableData: [],
      add: {
        name: "",
        age: "",
        sex: ""
      },
      update: {
        name: "",
        age: "",
        sex: ""
      },
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      row: null,
      uid: "",
      username: '',
      pageSize: 2,
      curPage: 1,
      totalCount: 0
    };
  },
  created() {
    this.userSession()
    this.query();
  },
  methods: {
    userSession(){
      this.axios.post('/user/usersession',{})
      .then(res => {
        console.log(res)
        if(res.data.code === 1 && res.data.session){
          this.username = ''
          this.$router.push({
            path: '/login'
          })
        }else{
          this.username = res.data.data.username
        }
      })
      .catch(err => {
        console.error(err); 
      })
    },
    setData(datas) {
      if (datas.length > 0) {
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].sex * 1 === 1) {
            this.$set(datas[i], "sex", "男");
          } else if (datas[i].sex * 1 === 2) {
            this.$set(datas[i], "sex", "女");
          }
        }
      }
      return datas;
    },
    query(curPage, isquery) {
      const obj = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        pageSize: this.pageSize,
        curPage: curPage
      };
      this.axios
        .post("/user/query", obj)
        .then(res => {
          console.log(res.data);
          this.tableData = res.data.data ? this.setData(res.data.data) : [];
          if (isquery) {
            this.$message({
              message: "查询成功",
              type: "success"
            });
          }
          this.totalCount = res.pager?res.pager.totalCount:0
          this.curPage = res.pager?res.pager.curPage:1
        })
        .catch(err => {
          console.error(err);
          if (isquery) {
            this.$message({
              message: "查询失败",
              type: "warning"
            });
          }
          this.tableData = [];
          this.totalCount = 0
          this.curPage = 1
        });
    },
    newAdd() {
      this.dialogVisible = true;
    },
    editFunc(row) {
      console.log(row);
      this.dialogVisible2 = true;
      this.uid = row._id;
      this.$set(this.$data.update, "name", row.name);
      this.$set(this.$data.update, "age", row.age);
      this.$set(this.$data.update, "sex", row.sex);
      this.row = row;
    },
    delFunc(row) {
      this.dialogVisible3 = true;
      console.log(row);
      this.row = row;
    },
    editConfirm() {
      const id = this.uid;
      const { name, age, sex } = this.update;
      const obj = {
        id: id,
        name: name,
        age: age,
        sex: sex
      };
      this.axios
        .post("http://localhost:3000/user/update", obj)
        .then(res => {
          console.log(res);
          this.$message({
            message: "更新成功",
            type: "success"
          });
          this.query(false);
        })
        .catch(err => {
          console.error(err);
          this.$message({
            message: "更新失败",
            type: "warning"
          });
        });
      this.dialogVisible2 = false;
    },
    delConfirm() {
      const obj = {
        id: this.row._id
      };
      console.log(obj);
      this.axios
        .post("http://localhost:3000/user/del", obj)
        .then(res => {
          console.log(res);
          this.$message = {
            message: "删除成功",
            type: "success"
          };
          this.query();
        })
        .catch(err => {
          console.error(err);
          this.$message({
            message: "删除失败",
            type: "warning"
          });
        });
      this.dialogVisible3 = false;
    },
    addConfirm() {
      const obj = {
        name: this.add.name,
        age: this.add.age,
        sex: this.add.sex
      };
      this.axios
        .post("http://localhost:3000/user/add", obj)
        .then(res => {
          console.log(res);
          this.$message = {
            message: "添加成功",
            type: "success"
          };
          this.query();
        })
        .catch(err => {
          console.error(err);
          this.$message({
            message: "添加失败",
            type: "warning"
          });
        });
      this.dialogVisible = false;
    },
    logout(){
      this.axios.post('/regLogin/logout',{})
      .then(res => {
        console.log(res)
        this.$message({
          message: '注销成功',
          type: 'success'
        })
        setTimeout(()=>{
          this.$router.push({
            path:'/login'
          },1000)
        })
      })
      .catch(err => {
        console.error(err); 
      })
    },
    handleCurrentChange(page){
      this.query(page, false)
    }
  }
};
</script>
<style>
.container {
  width: 100%;
  margin: 20px auto;
}
.header {
  width: 100%;
  overflow: hidden;
}
.header .item {
  float: left;
  width: 20%;
}
.formpart {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  overflow: hidden;
}
.dialogitem {
  float: left;
  width: 100%;
}
</style>