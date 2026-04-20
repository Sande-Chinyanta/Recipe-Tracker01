const BASE_URL =  "https://www.themealdb,com/api/json/v1/1";

export const MealAPI = {
    // search meal by name
    searchMealsByName: async (query) => {
        try {
            const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error searching meals by name:", error);
            return [];          
        }
    },
    getMealById: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
            const data = await response.json();
            return data.meals ? data.meals[0] : null;
        } catch (error) {
            console.error("Error getting meal by id:", error);
            return null;
        }
    },

    getRandomMeal: async () => {
        try {
             const response = await fetch(`${BASE_URL}/random.php`);
             const data = await response.json();
             return data.meals ? data.meals[0] : null;
        } catch (error) {
            console.error("Error getting meal by id:", error);
            return null;
        }
    },
    getRandomMeals: async (count = 6) => {
        try {
            const promises = array(count)
            .fill()
            .map(() => MealAPI.getRandomMeal());
            const meals = await Promise.all(promises);
            return meals.filter((meal) => meal !== null);
        } catch (error) {
            console.error("Error getting meal by id:", error);
            return [];
        }
    },
    getCategories: async () => {
        try {
            const response = await fetch(`${BASE_URL}/categories.php`);
            const data = await response.json();
            return data.categories || [];
        } catch (error) {
            console.error("Error getting meal by id:", error);
             return [];
        }
    },
    filterByIngredient: async (ingredient) => {
        try {
            const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error getting meal by id:", error);
            return [];
        }
    },
    filterByCategorie: async (category) => {
        try {
            const response = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(ingredient)}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error getting meal by id:", error);
            return [];
        }
    },
}; 