# See for help: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04

echo -e "____________ Hopefully this works ___________"
echo "--------------------------------------------------------------"
echo "Create password for root"
echo "--------------------------------------------------------------"
echo -e "run 'ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';'\nThen exit."
sudo mysql --silent
echo want to continue initialization \[Y/N\]?

read choice
if [ "$choice" != "Y" ] && [ "$choice" != "y" ]; then 
    echo "Quitting initialization..."
    exit
fi

echo "--------------------------------------------------------------"
echo "Install mysql securely"
echo "--------------------------------------------------------------"
# echo -e "\n Follow instructions provided from mysql_secure_installation"
# sudo mysql_secure_installation

echo "--------------------------------------------------------------"
echo "  Log in with auth_socket as root and create your user which will
        be used by nodejs to access the database.
--------------------------------------------------------------"
echo "  run 'ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;'
        USE mysql;
        CREATE USER 'system_user'@'localhost' IDENTIFIED BY 'your password';
        GRANT ALL PRIVILIGES ON *.* TO 'system_user'@'localhost';
        FLUSH PRIVILIGES;
        exit;
"
mysql -u root -p


