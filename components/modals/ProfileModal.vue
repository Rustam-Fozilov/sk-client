<template>
  <div>
    <div class="relative w-full h-screen" @click="closeProfileModal">
      <div class="absolute right-0 mr-16 -top-2 bg-soft-white drop-shadow-lg font-tt-regular rounded-lg">
        <div class="w-60 rounded-lg border border-black border-opacity-20 p-4">
          <div>{{ me?.name }} {{ me?.surname }}</div>
          <div class="text-xs opacity-70">+{{ me?.phone }}</div>
          <hr class="mt-3">
          <div>
            <div @click="gotoSaved" class="flex gap-3 items-center py-1 cursor-pointer hover:opacity-70 transition">
              <save-icon width="12px"/>
              <div>Saqlanganlar</div>
            </div>
            <!-- TODO: keyinchalik qo'shiladi -->
            <!-- <div class="flex gap-3 items-center py-1 cursor-pointer hover:opacity-70 transition">
              <comment-icon width="14px"/>
              <div>Izohlar</div>
            </div> -->
          </div>
          <hr class="mt-3">
          <div @click="logout" class="flex gap-3 items-center py-1 cursor-pointer hover:opacity-70 transition">
            <logout-icon/>
            <div>Chiqish</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthService } from '~/core/services/auth.service';

const isProfileOpened = useIsProfileOpened();
const router = useRouter();
const authService = new AuthService();

defineProps({
  me: {
    required: false,
    type: Object
  }
})

const closeProfileModal = () => {
  isProfileOpened.value = false;
}

const gotoSaved = () => {
  router.push('/profile/saved');
}

const logout = async () => {
  await authService.logout();
  window.location.reload();
}

</script>
