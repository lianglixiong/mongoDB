#  mongoDB

### 一、MongoDB 数据导入 mongoimport

#### 1、概述
使用mongoimport命令可以把指定格式的文件导入到指定集合中。可导入JSON数据以及CSV数据。

#### 2、语法
```
C:\mongo\bin>mongoimport --help
options:
  --help                  produce help message
  -v [ --verbose ]        be more verbose (include multiple times for more
                          verbosity e.g. -vvvvv)
  -h [ --host ] arg       mongo host to connect to ( <set name>/s1,s2 for sets)
  --port arg              server port. Can also use --host hostname:port
  --ipv6                  enable IPv6 support (disabled by default)
  -u [ --username ] arg   username
  -p [ --password ] arg   password
  --dbpath arg            directly access mongod database files in the given
                          path, instead of connecting to a mongod  server -
                          needs to lock the data directory, so cannot be used
                          if a mongod is currently accessing the same path
  --directoryperdb        if dbpath specified, each db is in a separate
                          directory
  -d [ --db ] arg         database to use
  -c [ --collection ] arg collection to use (some commands)
  -f [ --fields ] arg     comma separated list of field names e.g. -f name,age
  --fieldFile arg         file with fields names - 1 per line
  --ignoreBlanks          if given, empty fields in csv and tsv will be ignored
  --type arg              type of file to import.  default: json (json,csv,tsv)
  --file arg              file to import from; if not specified stdin is used
  --drop                  drop collection first
  --headerline            CSV,TSV only - use first line as headers
  --upsert                insert or update objects that already exist
  --upsertFields arg      comma-separated fields for the query part of the
                          upsert. You should make sure this is indexed
  --stopOnError           stop importing at first error rather than continuing
  --jsonArray             load a json array, not one item per line. Currently
                          limited to 4MB.

```

说明：

-h：数据库宿主机IP

-u：数据库用户名

-p：数据库密码

-d：数据库名字

-c：集合名字

-f：指明导入的列

#### 3、示例
首先删除emp中的数据。
```
db.emp.remove( );
```

导入JSON格式的数据

![1557457907](https://github.com/lianglixiong/image-github/blob/master/mpvue/1557457907.png) 

导入CSV格式的数据：

![null](https://img-blog.csdn.net/20140524102020546?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXl5d3ly/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

说明：

-type：指明要导入的文件格式。

--headerline：指明不导入第一行，csv格式的文件第一行为列名。

-file：指明要导入的文件路径。

#### 4、批量导入

如图:
![null](https://github.com/lianglixiong/image-github/blob/master/mongodb/1558503763.jpg)

在window中批量导入语句（在E:\node\mongodb\bin路劲下运行）
```
for /r E:\node\bbf_information\ecommerce_support\csv %i in (*.csv) do "mongoimport.exe" --db ecommerce_support --type csv --headerline --ignoreBlanks --file "%i"
```

![null](https://github.com/lianglixiong/image-github/blob/master/mongodb/1558505190(1).png)

注意：

导入数据和开启MongoDB的窗口要分开
