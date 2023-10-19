import axios from "axios";
import { CreateTeacherDto } from '../../../../api/dtos/createTeacherDto'
import { CreateStudentDto } from '../../../../api/dtos/createStudentDto'
const baseUrl = 'http://localhost:3333/api/';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

const wisdomApi = {
  teacher: {
    create: async (createTeacher: CreateTeacherDto)=>{
      try {
        const created = await api.post('teacher/create', createTeacher)
        return created
      } catch (error){
        console.log(error)
        return error
      };
    },
    getOne: async (teacherId: string) => {
      try {
        const getOne = await api.get(`/teacher/${teacherId}`)
        console.log(getOne)
        return getOne
      } catch(error){
        console.log(error)
        return error
      }
    }
  },
  student: {
    create: async(student: CreateStudentDto)=>{
      try {
        const created = await api.post('student/create', student)
        return created
      } catch (error){
        console.log(error)
        return error
      };
    },
    getOne: async (studentId: string) => {
      try {
        const getOne = await api.get(`/teacher/${studentId}`)
        console.log(getOne)
        return getOne
      } catch(error){
        console.log(error)
        return error
      }
    }
  }
}