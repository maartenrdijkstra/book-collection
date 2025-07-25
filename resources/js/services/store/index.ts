//@ts-nocheck
import { ref, computed } from "vue";
import { getRequest, postRequest, putRequest, deleteRequest } from ".."; // Assuming these functions are defined in httpService.js

export const storeModuleFactory = (moduleName) => {
    const state = ref({});

    const getters = {
        all: computed(() => state.value),
        getById: (id) => computed(() => state.value[id]),
    };

    const setters = {
        setAll: (items) => {
            items = items.data;
            for (const item of items)
                state.value[item.id] = Object.freeze(item);
        },
        deleteByItem: (item) => {
            delete state.value[item];
        },
    };

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },
        create: async (item) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },
        update: async (id, item) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },
        delete: async (id) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteByItem(id);
        },
    };

    return { getters, setters, actions };
};
