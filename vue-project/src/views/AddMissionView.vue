<script setup>
import {ref} from "vue";
import ErrorDescription from "@/components/ErrorDescription.vue";
import apiFetch from "../../helpers/apiFetch.js";

const form = ref({
  data: {
    mission: {
      name: "",
      launch_details: {
        launch_date: "",
        launch_site: {
          name: "",
          location: {
            latitude: "",
            longitude: ""
          }
        }
      },
      landing_details: {
        landing_date: "",
        landing_site: {
          name: "",
          coordinates: {
            latitude: "",
            longitude: ""
          }
        }
      },
      spacecraft: {
        command_module: "",
        lunar_module: "",
        crew: [
          {
            name: "",
            role: ""
          },
        ]
      }
    }
  },
  errors: {}
})

const addCrew = () => {
  form.value.data.mission.spacecraft.crew.push({
    name: '',
    role: ''
  })
}

const deleteCrew = () => {
  const index = form.value.data.mission.spacecraft.crew.indexOf()
  form.value.data.mission.spacecraft.crew.splice(index, 1)
}

const sendForm = async () =>{
  const result = await apiFetch('post', '/lunar-missions', form.value.data)
  if(result.error){
    form.value.errors = result.error.errors
  }
}

const getError = key => {
  return form.value.errors[`mission.${key}`]
}
</script>

<template>
  <form class="container mt-10 sm:mx-auto sm:w-full sm:max-w-2xl" @submit.prevent="sendForm()">
    <div class="px-4 mb-10 sm:px-0 bg-white shadow-xl rounded">
      <div class="flex justify-between w-full items-center p-6">
        <label class="text-base font-semibold leading-7 text-sky-600 text-xl">Название миссии</label>
        <input v-model="form.data.mission.name" :class="{'has_error': getError('name')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
        <ErrorDescription :error="getError('name')" />
      </div>
      <div class="px-6">
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Дата запуска</p>
        <input v-model="form.data.mission.launch_details.launch_date" :class="{'has_error': getError('launch_details.launch_date')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
        <ErrorDescription :error="getError('launch_details.launch_date')" />
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Дата посадки</p>
        <input v-model="form.data.mission.landing_details.landing_date" :class="{'has_error': getError('landing_details.landing_date')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
        <ErrorDescription :error="getError('landing_details.landing_date')" />
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Место запуска</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.launch_details.launch_site.name" :class="{'has_error': getError('launch_details.launch_site.name')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('launch_details.launch_site.name')" />
              </div>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Широта</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.launch_details.launch_site.location.latitude" :class="{'has_error': getError('launch_details.launch_site.location.latitude')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('launch_details.launch_site.location.latitude')" />
              </div>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Долгота</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.launch_details.launch_site.location.longitude" :class="{'has_error': getError('launch_details.launch_site.location.longitude')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('launch_details.launch_site.location.longitude')" />
              </div>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Место посадки</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.landing_details.landing_site.name" :class="{'has_error': getError('landing_details.landing_site.name')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('landing_details.landing_site.name')" />
              </div>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Широта</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.landing_details.landing_site.coordinates.latitude" :class="{'has_error': getError('landing_details.landing_site.coordinates.latitude')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('landing_details.landing_site.coordinates.latitude')" />
              </div>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <label class="text-sm font-medium leading-6 text-gray-900">Долгота</label>
              <div class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input v-model="form.data.mission.landing_details.landing_site.coordinates.longitude" :class="{'has_error': getError('landing_details.landing_site.coordinates.longitude')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError('landing_details.landing_site.coordinates.longitude')" />
              </div>
            </div>
          </dl>
        </div>
        <h2 class="my-6 text-xl text-sky-600">Информация о космическом корабле</h2>
        <div class="px-4 sm:px-0">
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Лунный модуль: </p>
          <input v-model="form.data.mission.spacecraft.lunar_module" :class="{'has_error': getError('spacecraft.lunar_module')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
          <ErrorDescription :error="getError('spacecraft.lunar_module')" />
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Управляющий модуль:</p>
          <input v-model="form.data.mission.spacecraft.command_module" :class="{'has_error': getError('spacecraft.command_module')}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
          <ErrorDescription :error="getError('spacecraft.command_module')" />
        </div>
        <div class="px-4 py-6 flex justify-between items-center">
          <ul>
            <li v-for="(crew, index) in form.data.mission.spacecraft.crew" class="flex justify-between gap-x-6 py-5">
              <div class="flex gap-x-4 items-center">
                <p class="text-sm font-semibold text-gray-900">ФИО</p>
                <input v-model="crew.name" :class="{'has_error': getError(`spacecraft.crew.${index}.name`)}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError(`spacecraft.crew.${index}.name`)" />
                <p class="mt-1 text-xs text-gray-500">Должность</p>
                <input v-model="crew.role" :class="{'has_error': getError(`spacecraft.crew.${index}.role`)}" class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                <ErrorDescription :error="getError(`spacecraft.crew.${index}.role`)" />
              </div>
              <button type="button" @click="deleteCrew(crew)">-</button>
            </li>
          </ul>
          <div>
            <i @click="addCrew()" class="text-sky-600 text-2xl fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="my-10">
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Сохранить</button>
      </div>
    </div>
    <RouterLink to="/missions" class="bg-sky-500 text-white py-2 px-2 rounded shadow-md text-xs hover:bg-sky-600">К списку миссий</RouterLink>
  </form>
</template>
