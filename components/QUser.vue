<template>
  <div class="user">
    <div class="user__photo">
      <img src="http://lorempixel.com/130/130/people/9" />
    </div>
    <div class="user__info">
      <strong class="name">Juliana Ladeira</strong>
      <p class="user-title">Médica do hospital do centro</p>
      <p class="city">São José dos Campos, São Paulo</p>
      <button class="card__edit" @click="openMenu">
        <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon icon"><g class="large-icon" style="fill: currentColor" id="gear-icon-large">
          <path d="M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,5.13A2.13,2.13,0,1,1,14.12,12,2.12,2.12,0,0,1,12,14.13Zm7.91-2.87L22,9.38,19.26,4.62,16.6,5.5a1,1,0,0,1-1.29-.75L14.74,2H9.26L8.69,4.75A1,1,0,0,1,7.4,5.5L4.74,4.62,2,9.38l2.09,1.87a1,1,0,0,1,0,1.49L2,14.62l2.74,4.76L7.4,18.5a1,1,0,0,1,1.29.75L9.26,22h5.48l0.57-2.75a1,1,0,0,1,1.29-.75l2.66,0.88L22,14.62l-2.09-1.87A1,1,0,0,1,19.91,11.25ZM18.4,17.12l-1.22-.4a2.86,2.86,0,0,0-3.7,2.14l-0.26,1.26H10.78l-0.26-1.26a2.86,2.86,0,0,0-3.7-2.14l-1.22.4L4.38,15l1-.86a2.88,2.88,0,0,0,0-4.29L4.38,9,5.6,6.88l1.22,0.4a2.86,2.86,0,0,0,3.7-2.14l0.26-1.26h2.44l0.26,1.26a2.86,2.86,0,0,0,3.7,2.14l1.22-.4L19.62,9l-1,.86a2.88,2.88,0,0,0,0,4.29l1,0.86Z"></path>
          </g></svg>
  </button>
    </div>

    <div class="menu" :class="{'menu--show': showMenu}">
      <ul>
        <li>
          <a href="">Editar</a>
        </li>
        <li>
          <a href="">Sair</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="scss">
.user {
  text-align: center;
  align-items: center;
  display: flex;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  z-index: 2;
}

.user__photo {
  border: 4px solid #fff;
  box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,0.1), 0 1.5px 3px 0 rgba(0,0,0,0.1);
  border-radius: 50%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 130px;
  width: 130px;
  overflow: hidden;
  margin-bottom: 16px;
}

.user__info {
  display: inline-block;

  strong {
    display: inline-block;
    margin-bottom: 0;
    font-size: 22px;
    line-height: 2.4rem;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 2rem;
  }
}

.card__edit {
  border: none;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 18px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
  }
}

.city {
  color: rgba(0,0,0,0.6);
  font-size: 1.4rem;
}

.user-title {
  font-size: 1.4rem;
}

.name {
  font-size: 2rem;
}

.menu {
  font-size: 1.6rem;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2);
  padding: 8px 16px;
  position: absolute;
  background-color: #fff;
  right: 16px;
  border-radius: 4px;
  top: 40px;
  min-width: 150px;
  transform: scale(0);
  transition: transform 250ms ease;
  transform-origin: top right;

  &--show {
    transform: scale(1);
  }

  &::before {
    content: '';
    max-width: 0;
    max-height: 0;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: - 20px;
    right: 8px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    text-align: left;
    margin-bottom: 0;
  }

  a {
    color: #05869b;
    display: inline-block;
    font-weight: bold;
    padding: 4px 0;
    width: 100%;
    cursor: pointer;
  }
}

</style>
