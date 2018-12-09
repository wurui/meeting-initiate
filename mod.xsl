<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.meeting-initiate">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-meeting-initiate" ox-mod="meeting-initiate">
            <form novalidate="novalidate">
            	<section>
            		<div class="table-box">
	            		<table width="100%" cellpadding="0" cellspacing="0">
	            			<tbody>
	            				<tr>
	            					<th>
	            						<label>主题</label>
	            					</th>
	            					<td>
	            						<input name="title" placeholder="聚会主题（最多20字）" type="text"/>
	            					</td>
	            				</tr>
	            				
	            				<tr>
	            					<th>
	            						<label>时间</label>
	            					</th>
	            					<td>
	            						<input name="starttime" placeholder="请选择时间" type="datetime-local"/>
	            					</td>
	            				</tr>
	            				<tr>
	            					<th>
	            						<label>地点</label>
	            					</th>
	            					<td>
	            						<input name="spot" placeholder="请输入地点（最多30字）" type="text"/>
	            					</td>
	            				</tr>
	            				<tr>
	            					<th>
	            						<label>人数</label>
	            					</th>
	            					<td>
	            						<input name="scale" placeholder="大约与会人数" type="number"/>
	            					</td>
	            				</tr>
	            			</tbody>
	            		</table>
	            	</div>
	            </section>

	            <section>
	            	<h4 class="section-title">聚会内容</h4>
	            	<div class="text-box">
	            		<textarea name="content" placeholder="描述此次聚会内容"></textarea>
	            	</div>
	            	
	            </section>
	            <section>
	            	<h4 class="section-title">补充说明</h4>
	            	<div class="text-box">
		            	<textarea name="notice" placeholder="其它要注意的事项"></textarea>
		            </div>
	            </section>

            	
            	<br/>
            	<center>
	            	<button>提&#160;&#160;&#160;&#160;交</button>
	            </center>
            </form>
        </div>
    </xsl:template>
</xsl:stylesheet>
