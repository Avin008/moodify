import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="auth"
        options={{
          headerShown: false,
          animation: "fade",
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
};

export default Layout;
