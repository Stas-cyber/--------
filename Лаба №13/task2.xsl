<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="forXML.css"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/catalog">
   <html>
   <body>
   <table border="1">
     <tr bgcolor="#9acd32">
       <th>Студент</th>
       <th>Оценка</th>
     </tr>
    <xsl:for-each select="cd"> 
    <!-- <xsl:sort order="ascending" select="mark"/> сортировка по возрастанию-->
    <tr> 
      <td><xsl:value-of select="title"/></td> 
      <xsl:choose> 
      
         <xsl:when test="mark &gt; 8"> 
           <td bgcolor="green"> 
              <xsl:value-of select="mark"/>
           </td> 
        </xsl:when>
        <xsl:when test="mark &lt; 4"> 
           <td bgcolor="red"> 
              <xsl:value-of select="mark"/>
           </td> 
        </xsl:when>
        <xsl:otherwise> 
           <td><xsl:value-of select="mark"/></td> 
        </xsl:otherwise>
      </xsl:choose>
    </tr> 
</xsl:for-each>
   </table>
   </body>
   </html>
</xsl:template>

</xsl:stylesheet> 