# See for help: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04

echo -e "____________ Hopefully this works ___________"
echo -e "run 'ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';'\nThen exit."
sudo mysql --silent
echo want to continue initialization \[Y/N\]?

read choice
if [ "$choice" != "Y" ] && [ "$choice" != "y" ]; then 
    echo "Quitting initialization..."
    exit
fi

echo -e "\n Follow instructions provided from mysql_secure_installation"
sudo mysql_secure_installation
echo -e "run 'ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;'"
mysql -u root -p
